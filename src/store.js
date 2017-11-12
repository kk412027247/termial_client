import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerQuery from './reducer.js';
import reducerFetch from './reducerFetch.js';

//As of React 16, react-addons-perf is not supported. Please use your browser’s profiling tools to get insight into which components re-render.
//Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).


//import Perf from 'react-addons-perf';
//
const win = window;
//win.Perf = Perf;

const reducer = combineReducers({
  reducerQuery,
  reducerFetch
});

const middlewares = [thunkMiddleware];
if(process.env.NODE_ENV !== 'production'){
  middlewares.push( require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f)=>f,
);


const iniState ={
  reducerQuery:{
    drawer:false,
    snackbar:false,
    snackbarMessage: '123123',
    input:'',
    data:[],
    dialog: false,
    fetching: false,
  },
  reducerFetch:{
    status: 'LOADING',
    result:[],
    input:'',
    snackbar:false,
    snackbarMessage: '',
    detail:{},
    updateDetail:{},
    dialog: false,
    addInput:'',
  }
};



export default createStore(reducer, iniState, storeEnhancers);
