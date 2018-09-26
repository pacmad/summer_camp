import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { Route, HashRouter, NavLink, Link } from 'react-router-dom';

// import Foot from '../Foot/Foot';

import './Navbar.css';

const styles = theme => ({
	button: {
		width: "30%",
		maxWidth: 400,
		minWidth: 250
	}
});

class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div id="nav-bar">
				<div id="main-nav">
					<div id="logo-nav"><img src="./images/logo.png" /></div>
					<Button variant="contained" color="primary" className={classes.button} >
						Забронювати
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);
