import React from 'react';

const ProjectElement = ({ project }) => (
	<tr className="mainTable__rows">
		<td className="mainTable__cell">{project.name}</td>
		<td className="mainTable__cell">{project.description}</td>
		<td className="mainTable__cell">{project.owner.login}</td>
	</tr>
);

export default ProjectElement;
