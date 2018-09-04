import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

import './CardCatalog.css';

class CardCatalog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photo_path: "./" + this.props.photoPath,
			title: this.props.title,
			link: this.props.link
		}
	}

	render() {
		return (
			<Link className="card-link" to={this.state.link}>
				<div className="catalog-card">
					<img src={this.state.photo_path} className="card-img-src"/>
					<div className="card-container">
						<h6><b>{this.state.title}</b></h6>
					</div>
				</div>
			</Link>
		);
	}
}

export default CardCatalog;
