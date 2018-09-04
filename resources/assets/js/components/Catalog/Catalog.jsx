import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import CardCatalog from './CardCatalog/CardCatalog';

import './Catalog.css';

class Catalog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('catalog').then ((result) => {
			this.setState({ cards: result });
			this.setState({ ready: true });
		})
	}

	render() {
		if (this.state.ready === false) {
			return (
				<h2>Hello</h2>
			);
		}
		const cards = this.state.cards;
		const allCards = cards.map((card, i) =>
			<CardCatalog
				key={i}
				photoPath={card.photo_path}
				title={card.title}
				link={card.link}
				/>
		)
		return (
			<div id="catalog">
				{allCards}
			</div>
		);
	}
}

export default Catalog;
