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
							<li><a href="https://www.freepik.com/free-vector/mountain-landscape-with-tourist-on-foreground_1215596.htm">Designed by Vectorpocket</a></li>
							<li></li>
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
