import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Route, HashRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Foot from '../../components/Foot/Foot';
import Catalog from '../../components/Catalog/Catalog';

import './IndexPage.css';

class IndexPage extends Component {
	render() {
		console.log("test");
		return (
			<div>
				<Navbar />
				<Catalog />
			</div>
		);
	}
}

export default IndexPage;

// <Foot />
