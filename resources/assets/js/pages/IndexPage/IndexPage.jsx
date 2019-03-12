import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Catalog from '../../components/Catalog/Catalog';
import IndexInfo from '../../components/IndexInfo/IndexInfo';
import Carousel from '../../components/IndexInfo/Carousel';
import Navbar from '../../components/Navbar/Navbar';
import './IndexPage.css';
import Foot from "../../components/Foot/Foot";

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
			<div id="child-root">
				<Navbar link="/booking" linkText="Забронювати" />
				<div id="main-body">
					<div className="index-info-wrapper">
						<IndexInfo />
					</div>
					<div className="index-photo-wrapper"><Carousel/></div>
					<div id="catalog">
						{allCards}
					</div>
                    <Foot/>
				</div>
			</div>
		);
	}
}

export default IndexPage;
