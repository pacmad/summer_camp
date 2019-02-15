import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Navbar from '../../components/Navbar/Navbar';
import Information from '../../components/Information/Information';
import { withStyles } from '@material-ui/core/styles';
import Foot from "../../components/Foot/Foot";

class InformationPage extends Component {

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
					<Information />
                    <Foot/>
				</div>
			</div>
		);
	}
}

export default InformationPage;
