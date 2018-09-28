import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { GetData } from '../../functions/GetData';
import Events from '../../components/Events/Events';
// import IndexInfo from '../../components/IndexInfo/IndexInfo';
// import Navbar from '../../components/Navbar/Navbar';
// import './IndexPage.css';

const styles = theme => ({
	root: {
		marginRight: "25%",
		marginLeft: "25%",
		[theme.breakpoints.down("sm")]: {
			marginRight: "10%",
			marginLeft: "10%",

		},
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
		// GetData('catalog').then ((result) => {
			// this.setState({ cards: result, ready: true });
		// })
	}

	render() {
		const { classes } = this.props;
		// if (this.state.ready === false) {
		// 	return (
		// 		<div></div>
		// 	);
		// }
		// const cards = this.state.cards;
		// const allCards = cards.map(
		// 	(card, i) =>
		// 	<Catalog
		// 		key={i}
		// 		photoPath={card.photo_path}
		// 		title={card.title}
		// 		link={card.link}
		// 		 />
		// )
		return (
			<div className={classes.root}>
				<Events />
			</div>
		);
	}
}

export default withStyles(styles)(ProgramPage);


// <Navbar />
// <div className="index-info-wrapper">
	// <IndexInfo />
// </div>
// <div id="catalog">
	// {allCards}
// </div>
