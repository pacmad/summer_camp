import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';

import './Placement.css';

class Placement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			placement: [],
			ready: false
		}
	}

	componentWillMount() {
		GetData('/placement').then((result) => {
			// console.log(result);
			this.setState({
				placement: result,
				ready: true
			});
		})
	}

	render() {

		if (this.state.ready === false) {
			return (<div></div>);
		}

		const info = this.state.placement;
		console.log(info);
		const allBlocks = info.map(
			(block, i) =>
			<div key={i} className="placement-info-container">
				<div className="placement-info-title">{block.title}</div>
				<div className="placement-info-description">{block.description}</div>
				<hr />
			</div>
		)

		return (
			<div className="placement-container">
				{allBlocks}
				<iframe className="placement-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2649.7562951240193!2d24.9092241!3d48.3844176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736dad7b0949c9d%3A0xd4f319b8b5606742!2sKolyba+%22Zolotyy+Korin%CA%B9%22!5e0!3m2!1sru!2sua!4v1536567451520"
					frameBorder="0" allowFullScreen></iframe>
			</div>

		);
	}
}

export default Placement;


// <div className="placement-location">
//
// </div>
// <div className="placement-how-to-get">
//
// </div>
// <div className="placement-accomodation-food">
//
// </div>
// <div className="placement-additional-info">
//
// </div>
