import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { GetData } from '../../functions/GetData';
import Events from '../../components/Events/Events';
import Navbar from '../../components/Navbar/Navbar';

const styles = theme => ({
	root: {
		marginTop: "1rem",
		marginRight: "10%",
		marginLeft: "10%",
		[theme.breakpoints.down("xs")]: {
			marginRight: 0,
			marginLeft: 0,
		},
	}
});

class ProgramPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			ready: false
		}
	}

	componentWillMount() {

	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Navbar link="/" linkText="На головну" />
				<div id="main-body">
					<div className={classes.root}>
						<Events />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(ProgramPage);
