import React, { Component } from 'react';
import ProjectsList from './ProjectsList';
import SearchProjects from './SearchProjects';

class App extends Component {
	render() {
		return (
			<>
				<SearchProjects />
				<ProjectsList/>
			</>
		);
	}
}

export default App;
