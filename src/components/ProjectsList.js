import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectElement from './ProjectElement';

class ProjectsList extends Component {
	render() {
		const { projects, loading } = this.props;
		// const loading = true;
		return (
			<div className="resultSection">
				<h2 className="section__title">Projects:</h2>
				<table className="mainTable">
					<thead>
						<tr>
							<td className="mainTable__cell mainTable__headRows">Name</td>
							<td className="mainTable__cell mainTable__headRows">Description</td>
							<td className="mainTable__cell mainTable__headRows">Owner</td>
						</tr>
					</thead>
					<tbody>
						{loading && <tr>
							<td className="mainTable__cell mainTable__loading" colSpan={3}>
								<div className="loading">
									<div className="loading__element"></div>
									<div className="loading__element"></div>
									<div className="loading__element"></div>
								</div>
							</td>
						</tr>}
						{!loading && projects.map(project => <ProjectElement project={project} key={project.id}/>)}
						{!loading && !projects.length && <tr><td className="mainTable__cell" colSpan={3}>No data, please search projects</td></tr>}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects,
		loading: state.loading
	};
};

export default connect(mapStateToProps)(ProjectsList);
