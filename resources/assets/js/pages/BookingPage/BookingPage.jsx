import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Navbar from '../../components/Navbar/Navbar';
import BookingCard from '../../components/BookingCard/BookingCard';

class BookingPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: '',
			ready: false
		}
	}

	componentWillMount() {
		GetData('getTours')
		.then((result) => {
			console.log(result);
			this.setState({ data: result, ready: true });
		})
	}

	render() {

		if (!this.state.ready) {
			return (<div></div>);
		}

		const list = this.state.data.map(
			(tour, index) =>
			<BookingCard key={index} cardData={tour} />
		)
		return (
			<div id="child-root">
				<Navbar link="/" linkText="На головну" />
				<div id="main-body">
					{list}
				</div>
			</div>
		);
	}
}

export default BookingPage;
