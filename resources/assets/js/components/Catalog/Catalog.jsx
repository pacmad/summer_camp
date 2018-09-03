import React, { Component } from 'react';

import CardCatalog from './CardCatalog/CardCatalog';

import './Catalog.css';

class Catalog extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentWillMount() {
		
	}

	render() {
		console.log("test");
		return (
			<div id="catalog">
				<CardCatalog />
			</div>
		);
	}
}

export default Catalog;
