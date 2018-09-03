import React, { Component } from 'react';

import { Footer } from 'react-materialize';

import './Foot.css';

class Foot extends Component {
	render() {
		return (
			<footer className="page-footer">
				<div className="footer-copyright">
				  <div className="container footer-text-position">
						<ul className="creatBy-flex">
							<li>© 2018 Created by :</li>
							<li><a className="grey-text text-lighten-4 right creat-margin" target="_blank" href="https://github.com/Dornat">dpolosuh</a></li>
							<li><a className="grey-text text-lighten-4 right creat-margin" target="_blank" href="https://github.com/Madranko">mmotov</a></li>
							<li><a className="grey-text text-lighten-4 right creat-margin" target="_blank" href="http://www.github.com/Gryshchenko">vgryshch</a></li>
							<li><a className="grey-text text-lighten-4 right creat-margin" target="_blank" href="http://www.github.com/ekiriche">ekiriche</a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Foot;
