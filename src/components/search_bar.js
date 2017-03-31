import React, { Component } from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { term: '' };
	}
	
	render() { // function or method
		return (
			<div className="searchBox">
				<input 
					 className="searchBar"
					value={this.state.term}
					onChange={event => this.onInputChange( event.target.value )} />
			</div>	
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;