import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import 'typeface-raleway'
class Index extends React.Component {
  darkTheme = createMuiTheme({
  palette: {
    primary: {
      main:'#0276aa'
    },
    secondary: {
      main:'#000000'
    },
    type: 'dark',
  },
  typography: {
    fontFamily:'raleway'
  }
  });
  lightTheme = createMuiTheme({
  palette: {
    primary: {
      main:'#0276aa'
    },
    secondary: {
      main:'#000000'
    },
    type: 'light',
  },
  typography: {
    fontFamily:'raleway'
  }
  });
  constructor() {
    super();
    this.state = {
      dark: false
    }
  }
  toggleTheme() {
    this.setState({dark: !this.state.dark});
  }
  getTheme() {
    return this.state.dark ? this.darkTheme : this.lightTheme;
  }
  render() {
  return (
    <MuiThemeProvider theme={this.getTheme()}>
      <React.Fragment>
        <CssBaseline />
        <App toggleTheme={this.toggleTheme.bind(this)}/>
      </React.Fragment>
    </MuiThemeProvider>
  )
  }
}

export default Index
