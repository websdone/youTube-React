// import _ from 'loadash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFgm2lXHPevmJ-ZEL655_xtlXTg0KIoDg';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		 this.videoSearch('TheRollingStones');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		}); 
		
	}

	render() {
		// const videoSearch = _.debouce((term) => { this.videoSearch(term)}, 300);

		return (
			<div>
				<p className="search"> Search for music </p>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />, document.querySelector('.container')
);