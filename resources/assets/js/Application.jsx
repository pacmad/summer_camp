import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, red, purple } from '@material-ui/core/colors';
// import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route, BrowserRouter } from 'react-router-dom';

import './Application.css';

import Navbar from './components/Navbar/Navbar';
import IndexPage from './pages/IndexPage/IndexPage';
import ProgramPage from './pages/ProgramPage/ProgramPage';
import PlacementPage from './pages/PlacementPage/PlacementPage';
import InformationPage from './pages/InformationPage/InformationPage';
import BookingPage from './pages/BookingPage/BookingPage';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#bef67a',
			main: '#8bc34a',
			dark: '#5a9216',
			contrastText: '#fafafa',
		},
		secondary: {
			light: '#ffd95b',
			main: '#ffa726',
			dark: '#c77800',
			contrastText: '#fafafa',
		},
	},
});

export default class Application extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<div id="app-root">
						<div id="page-root">
							<Route exact path="/" component={IndexPage} />
							<Route exact path="/program" component={ProgramPage} />
							<Route exact path="/placement" component={PlacementPage} />
							<Route exact path="/information" component={InformationPage} />
							<Route exact path="/booking" component={BookingPage} />
						</div>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Application />, document.getElementById('root'));
}
