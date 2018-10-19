import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { GetData } from '../../functions/GetData';
import BookingInformationCard from './BookingInformationCard';
import BookingForm from './BookingForm';

const styles = theme => ({
	root: {
		display: "flex",
	},
	card: {
		maxWidth: 900,
		margin: "0 auto",
		marginBottom: 40,
		[theme.breakpoints.down("sm")]: {
			borderRadius: 0
		},
	},
	media: {
		objectFit: 'cover',
	},
	action: {
		width: "100%",
	}
});

class BookingCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openForm: false
		}
		this.handleBackData = this.handleBackData.bind(this);
	}

	componentWillMount() {
		console.log(this.props.cardData);
	}

	handleBackData(event) {
		this.setState({openForm: event});
	}

	render() {
		const { classes } = this.props;
		if (!this.props.cardData) {
			return (<div></div>);
		}
		const data = this.props.cardData;

		return (
			<div className={classes.root}>
				<BookingInformationCard cardData={data} callback={this.handleBackData}/>
				<BookingForm tourId={data.id} open={this.state.openForm} callback={this.handleBackData}/>
			</div>

		);
	}
}

export default withStyles(styles)(BookingCard);
