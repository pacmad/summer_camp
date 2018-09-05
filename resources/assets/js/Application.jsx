import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import './Application.css';

import Foot from './components/Foot/Foot';
import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Catalog/Catalog';
import Events from './components/Events/Events';

export default class Application extends Component {
	render() {
		return (
			<div>
				<HashRouter>
					<div>
						<Navbar />
						<Route exact path="/" component={Catalog}/>
						<Route exact path="/events" component={Events}/>
						<Foot />
					</div>
				</HashRouter>
			</div>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Application />, document.getElementById('root'));
}


// <HashRouter>
// 	<Route exact path="/" component={Navbar}/>
// </HashRouter>
