import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import reducer1 from './reducer.js';

//As of React 16, react-addons-perf is not supported. Please use your browser’s profiling tools to get insight into which components re-render.
//Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).


// import Perf from 'react-addons-perf';
//
const win = window;
// win.Perf = Perf;

const reducer = combineReducers({
  reducer1:reducer1,
});

const middlewares = [];
if(process.env.NODE_ENV !== 'production'){
  middlewares.push( require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f)=>f,
);


const iniState ={
  reducer1:{
    drawer:false,
    snackbar:false,
    snackbarMessage: '',
    input:'',
    dialog: false,
    data:[],
    fetching: false,
  }
};


export default createStore(reducer, iniState, storeEnhancers);
