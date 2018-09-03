import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-materialize';
// import { Link } from 'react-router-dom';
import { Route, HashRouter, NavLink, Link } from 'react-router-dom';

// import Foot from '../Foot/Foot';

import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div id="nav-bar">
				<div id="main-nav">
					<div id="logo-nav"><img src="../resources/assets/images/logo.png" /></div>
					<Link to="/booking">
						<Button waves='light' className="green lighten-2" id="booking-btn">Забронювати</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
