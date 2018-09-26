import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Catalog from '../../components/Catalog/Catalog';
import IndexInfo from '../../components/IndexInfo/IndexInfo';
import Navbar from '../../components/Navbar/Navbar';
import './IndexPage.css';

class IndexPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('catalog').then ((result) => {
			this.setState({ cards: result, ready: true });
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
			<Catalog
				key={i}
				photoPath={card.photo_path}
				title={card.title}
				link={card.link}
				/>
		)
		return (
			<div>
				<Navbar />
				<div className="index-info-wrapper">
					<IndexInfo />
				</div>
				<div id="catalog">
					{allCards}
				</div>
			</div>
		);
	}
}

export default IndexPage;
