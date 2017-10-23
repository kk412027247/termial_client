import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './nav.js';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'

ReactDOM.render(

    <Provider store={store}>
      <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
