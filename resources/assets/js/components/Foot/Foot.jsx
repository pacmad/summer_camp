import React, { Component } from 'react';

import { Footer } from 'react-materialize';

import './Foot.css';

class Foot extends Component {
	render() {
		return (
			<footer className="page-footer">
				<div className="footer-copyright">
					<div className="container footer-text-position">
						<div className='social-wrapper'>
							<a href="https://www.instagram.com/litodriada/"><div className='instagram'></div></a>
							<a href="https://www.facebook.com/litodriada"><div className='facebook'></div></a>
							<a href="viber://chat?number=+380990386661"><div className='viber'></div></a>
						</div>
						<div>
							<h4 className='footer-text'>
							ЗВ'ЯЗОК З НАМИ <br/>
							с. Люча, Косівський район, Івано-Франківська обл. тел. 0990386661
							</h4>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Foot;
