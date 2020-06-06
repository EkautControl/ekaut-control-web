import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0C113C',
            light: '#345087'
        },
        secondary: {
            main: '#8D95B9'
        },
        warning: {
            main: '#9B0021',
            dark: '#7a001e'
        },
        success: {
            main: '#47C74C'
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        button: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    }

})

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App/>
      </ThemeProvider>
    </Provider>
 ,
  document.getElementById('root')
);

