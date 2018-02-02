import {createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import generalReducer from './reducer/reducer.js';
import fetchReducer from './reducer/fetchReducer.js';
import adminReducer from './reducer/adminReducer';
import historyReducer from './reducer/historyReducer';
import addReducer from './reducer/addReducer';
const history = createHistory();
const rMiddleware = routerMiddleware(history);

const reducer = combineReducers({
  generalReducer,
  fetchReducer,
  adminReducer,
  historyReducer,
  routerReducer,
  addReducer,
});

const middleware = process.env.NODE_ENV !== 'production' ?
  [thunkMiddleware, rMiddleware, require('redux-immutable-state-invariant').default()] :
  [thunkMiddleware, rMiddleware] ;

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
    pages:0,
    date:new Date(Date.now()),
    userList:[],
    user:".*",
  },
  addReducer:{
    dataExist:[],
    uploadExist:[],
    valid:[],
    _dataExist:[],
    _uploadExist:[],
    _valid:[],
    focus:{},
    _id:0,
  }
};

export default createStore(reducer, iniState, applyMiddleware(...middleware));
