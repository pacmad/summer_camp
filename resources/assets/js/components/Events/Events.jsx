import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetData } from '../../functions/GetData';
import { withStyles } from '@material-ui/core/styles';

import CardEvents from './CardEvents/CardEvents';

const styles = theme => ({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('/events').then((result) => {
			// console.log(result);
			this.setState({ cards: result});
			this.setState({ ready: true });
		})
	}

	render() {
		const { classes } = this.props;

		if (this.state.ready === false) {
			return (
				<div></div>
			);
		}

		const cards = this.state.cards;
		const allCards = cards.map(
			(card, i) =>
			<CardEvents
				key={i}
				section={card.section}
				actions={card.actions}
				photoPath={card.photo_path}
				/>
		)
		return (
			<div className={classes.root}>
				{allCards}
			</div>
		);
	}
}

export default withStyles(styles)(Events);
