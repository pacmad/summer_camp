import React, { Component } from 'react';

import './EventList.css';

class EventList extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const actions = this.props.list;
		const actionList = actions.map(
			(action, i) =>
			<li key={i}>{action}</li>
		)
		console.log(actionList);

		return (
			<ul className="black-text event-list">
				{actionList}
			</ul>
		);
	}
}

export default EventList;
