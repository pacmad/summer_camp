import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	paragraph: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		marginBottom: "30px"
	},
	paragraphTitle: {
		fontSize: "50px",
		color: "#4caf50",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			fontSize: "30px",
		},
	},
	paragraphDescription: {
		fontSize: "30px",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
			marginLeft: "0",
			marginRight: ".5rem",
		},
	}
});

class InformationList extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		const list = this.props.list;
		const htmlList = list.map(
			(element, i) =>
				<li key={i}>{element.content}</li>
		)
		return (
			<div className={classes.paragraph}>
				<div className={classes.paragraphTitle}>{this.props.title}</div>
				<div className={classes.paragraphDescription}>
					<ul>
						{htmlList}
					</ul>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(InformationList);
