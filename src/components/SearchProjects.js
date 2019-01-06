import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchProjects extends Component {
	state = {
		searchParameters: ''
	}

	searchProjects = event => {
		event.preventDefault();
		this.props.getData(this.state.searchParameters);
		this.setState({
			searchParameters: ''
		});
	}

	getInputValue = event => {
		this.setState({
			searchParameters: event.target.value
		});
	}

	render() {
		return (
			<div className="searchSection">
				<form onSubmit={this.searchProjects}>
					<label htmlFor="searchInput" className="searchLabel">Project name:</label>
					<input id="searchInput" className="searchInput" type="text" placeholder="Type project name" value={this.state.searchParameters} onChange={this.getInputValue}/>
					<button className="mainButton" disabled={!this.state.searchParameters.length}>Search</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = {
	getData: (search) => ({
		type: 'GET_DATA',
		search: search
	})
}

export default connect(undefined, mapDispatchToProps)(SearchProjects);
