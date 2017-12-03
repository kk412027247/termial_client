import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunkMiddleware from 'redux-thunk';
import generalReducer from './reducer/reducer.js';
import fetchReducer from './reducer/fetchReducer.js';
import adminReducer from './reducer/adminReducer';
import historyReducer from './reducer/historyReducer';

const history = createHistory();
const rMiddleware = routerMiddleware(history);

//As of React 16, react-addons-perf is not supported. Please use your browser’s profiling tools to get insight into which components re-render.
//Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).


//import Perf from 'react-addons-perf';
//
const win = window;
//win.Perf = Perf;

const reducer = combineReducers({
  generalReducer,
  fetchReducer,
  adminReducer,
  historyReducer,
  routerReducer,
});

const middlewares = [rMiddleware,thunkMiddleware, ];
if(process.env.NODE_ENV !== 'production'){
  middlewares.push( require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f)=>f,
);


const iniState ={
  generalReducer:{
    drawer:false,
    snackbar:false,
    snackbarMessage: '123123',
    input:'',
    data:[],
    dialog: false,
    fetching: false,
    slideIndex:0,
  },
  fetchReducer:{
    status: 'LOADING',
    result:[],
    input:' ',
    snackbar:false,
    snackbarMessage: '',
    detail:{},
    updateDetail:{},
    dialog: false,
    addInput:'',
    userName:'',
    passWord:'',
    newPassWord:'',
    userInfo:{},
    downloadQuery:'',
    changePasswordDialog :false,
    combineInfo:[],
  },
  adminReducer:{
    addUserPassWord:'aaa111',
    addUserAuth:1,
    userList:[],
    resetUserPassWord:'',
    updateUserAuth:0,
    updateUserDialog:false,
    updateInfo:{},
    alert:false,
    removeUser:{}
  },
  historyReducer:{
    updateHistory:[],
    page:1,
  }
};



export default createStore(reducer, iniState, storeEnhancers);
