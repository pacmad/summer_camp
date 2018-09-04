import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import { GetData } from '../../functions/GetData';

import './Events.css';

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('/events').then((result) => {
			console.log(result);
			// this.setState
		})
	}

	render() {
		return (
			<div className="card-panel  z-depth-1 event-container">
				<div className="event-img-container">
					<img src="images/catalog/60.jpg" alt="" className="circle responsive-img" className="event-img" />
				</div>
				<div className="event-list-container">
					<ul className="black-text event-list">
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
						<li>This is a square image. Add the "circle" class to it to make it appear circular.</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Events;
