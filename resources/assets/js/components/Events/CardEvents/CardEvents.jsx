import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

import EventList from './EventList/EventList';
import './CardEvents.css';

class CardEvents extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card-panel  z-depth-1 event-container">
				<div className="event-img-container">
					<img src={this.props.photoPath} alt="" className="circle responsive-img" className="event-img" />
				</div>
				<div className="event-info-container">
				<div>
					<h4>{this.props.section}</h4>
				</div>
				<div className="event-list-container">
					<EventList list={this.props.actions}/>
				</div>
				</div>
			</div>
		);
	}
}

export default CardEvents;
