import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, red, purple } from '@material-ui/core/colors';
// import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { Route, HashRouter } from 'react-router-dom';

import './Application.css';

import IndexPage from './pages/IndexPage/IndexPage';

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
				<IndexPage />
			</MuiThemeProvider>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render(<Application />, document.getElementById('root'));
}


// <Route exact path="/events" component={Events}/>
// <Route exact path="/placement" component={Placement}/>
// <Route exact path="/information" component={Information}/>
// <Foot />
