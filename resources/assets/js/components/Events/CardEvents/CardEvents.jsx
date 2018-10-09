import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

import EventList from './EventList/EventList';
import './CardEvents.css';

const styles = theme => ({
	card: {
		width: 500,
		backgroundColor: "#F5F5F5",
		padding: 10,
		margin: "1rem",
		[theme.breakpoints.down("lg")]: {
			width: 450
		},
		[theme.breakpoints.down("md")]: {
			width: 330
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginRight: 0,
			marginLeft: 0,
		},
	},
	avatar: {
		width: 70,
		height: 70
	},
	list: {
		fontSize: 20,
		[theme.breakpoints.down("lg")]: {
			fontSize: 18
		},
	}
});

class CardEvents extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="Recipe" className={classes.avatar}>
							<img src={this.props.photoPath} width="60" height="60"/>
						</Avatar>
					}
					title={<Typography variant="headline" >{this.props.section}</Typography>}
					/>
				<hr />
				<CardContent className={classes.list}>
					<EventList list={this.props.actions}/>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(CardEvents);
