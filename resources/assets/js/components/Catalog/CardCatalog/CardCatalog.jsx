import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

import './CardCatalog.css';

class CardCatalog extends Component {
	render() {
		console.log("test");
		return (
			<div>
				<div className="row">
					<div className="col s12 m3">
						<div className="card">
							<div className="card-image">
								<img src="#" />
									<span className="card-title">Card Title</span>
								</div>
								<div className="card-content">
									<p>I am a very simple card. I am good at containing small bits of information.
										I am convenient because I require little markup to use effectively.</p>
								</div>
								<div className="card-action">
									<a href="#">This is a link</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	export default CardCatalog;
