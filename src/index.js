import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './body/body.js';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
//import {ConnectedRouter} from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();



ReactDOM.render(
  <Provider store={store}>
    {/*<ConnectedRouter history={history}>*/}
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    {/*</ConnectedRouter>*/}
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
