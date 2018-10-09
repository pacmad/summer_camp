import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { GetData } from '../../functions/GetData';

const styles = theme => ({
	placementContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		maxWidth: "1000px",
		margin: "0 auto",
		padding: "10px",
		width: "92%"
	},
	placementInfoTitle: {
		padding: "25px 0 40px 0",
		fontSize: "70px",
		color: "#81c784",
		[theme.breakpoints.down("sm")]: {
			fontSize: "40px"
		},
	},
	placementInfoDescription: {
		textAlign: "justify",
		fontSize: "30px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px"
		},
	},
	placementMap: {
		width: "100%",
		height: "450px",
		border: 0
	}
});

class Placement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			placement: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('/getPlacement').then((result) => {
			this.setState({
				placement: result,
				ready: true
			});
		})
	}

	render() {
		const { classes } = this.props;

		if (this.state.ready === false) {
			return (<div></div>);
		}

		const info = this.state.placement;
		const allBlocks = info.map(
			(block, i) =>
			<div key={i} className={classes.placementInfoContainer}>
				<div className={classes.placementInfoTitle}>{block.title}</div>
				<div className={classes.placementInfoDescription}>{block.description}</div>
				<hr />
			</div>
		)

		return (
			<div className={classes.placementContainer}>
				{allBlocks}
				<iframe className={classes.placementMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.9113048011686!2d24.90496052053109!3d48.383143795729985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736dad7af7c5a05%3A0x3a0b8f0f91e4146a!2z0JTRgNGW0LDQtNCwINC00LjRgtGP0YfQuNC5INGC0LDQsdGW0YA!5e0!3m2!1sru!2sua!4v1538710447956"
					frameBorder="0"allowFullScreen></iframe>
			</div>

		);
	}
}

export default withStyles(styles)(Placement);
