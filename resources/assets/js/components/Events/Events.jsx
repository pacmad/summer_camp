import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import { GetData } from '../../functions/GetData';

import CardEvents from './CardEvents/CardEvents';

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
			// console.log(result);
			this.setState({ cards: result});
			this.setState({ ready: true });
		})
	}

	render() {

		if (this.state.ready === false) {
			return (
				<div></div>
			);
		}

		const cards = this.state.cards;
		const allCards = cards.map(
			(card, i) =>
			<CardEvents
				key={i}
				section={card.section}
				actions={card.actions}
				photoPath={card.photo_path}
				/>
		)
		return (
			<div className="events-set">
				{allCards}
			</div>
		);
	}
}

export default Events;
