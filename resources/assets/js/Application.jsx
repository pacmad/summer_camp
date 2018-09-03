import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';

import IndexPage from './pages/IndexPage/IndexPage';

import './Application.css';

import Foot from './components/Foot/Foot';


export default class Application extends Component {
	render() {
		console.log("test");
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={IndexPage}/>
					<Route path="/booking" component={Foot}/>
				</div>
			</HashRouter>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Application />, document.getElementById('root'));
}


// <HashRouter>
// 	<Route exact path="/" component={Navbar}/>
// </HashRouter>
