import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Navbar from '../../components/Navbar/Navbar';
import Placement from '../../components/Placement/Placement';
import { withStyles } from '@material-ui/core/styles';

class PlacementPage extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentWillMount() {

	}

	render() {
		return (
			<div>
				<Navbar link="/" linkText="На головну" />
				<div id="main-body">
					<Placement />
				</div>
			</div>
		);
	}
}

export default PlacementPage;
