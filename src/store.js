import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import generalReducer from './reducer/reducer.js';
import fetchReducer from './reducer/fetchReducer.js';
import adminReducer from './reducer/adminReducer';
import historyReducer from './reducer/historyReducer';
import addReducer from './reducer/addReducer';
import exportReducer from './reducer/exportReducer';


//As of React 16, react-addons-perf is not supported.
// Please use your browser’s profiling tools to get insight into which components re-render.
//Load your app with ?react_perf in the query string (for example, http://localhost:3000/?react_perf).

const reducer = combineReducers({
  generalReducer,
  fetchReducer,
  adminReducer,
  historyReducer,
  routerReducer,
  addReducer,
  exportReducer,
});

export const history = createHistory();
const rMiddleware = routerMiddleware(history);
const middlewares = [thunkMiddleware, rMiddleware];
if(process.env.NODE_ENV !== 'production'){
  middlewares.push( require('redux-immutable-state-invariant').default());
}

const win = window;
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
    detailImageUrl:'',
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
    history:[],
    openImage:false,
    url:'' ,
    cache:false,
    skip:0,
    loadMore:true,
    stopLoading:false,
    loading:false,
    firstFetch:true,
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
  },
  exportReducer:{
    startDate:'',
    endDate:'',
    url:'',
    bool:false,
  }
};

export default createStore(reducer, iniState, storeEnhancers);
