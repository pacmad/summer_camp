import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, NavLink, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './Navbar.css';

const styles = theme => ({
	button: {
		width: "30%",
		maxWidth: 400,
		minWidth: 250
	}
});

class Navbar extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		const { classes } = this.props;
		return (
			<div id="nav-bar">
				<div id="main-nav">
					<div id="logo-nav"><img src="./images/logo.png" /></div>
					<Link to={this.props.link}>
						<Button variant="contained" color="primary" className={classes.button} >
							{this.props.linkText}
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);
