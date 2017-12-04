import host from '../host.js';
import 'whatwg-fetch';
import {snackbarMessage} from './fetchActions';

const _getUpdateHistory = (info)=>({
  type:'GET_UPDATE_HISTORY',
  updateHistory:info,
});

const page = (pages)=>({
  type:'PAGE',
  pages,
});

export const getUpdateHistory = (query)=>(
  dispatch=>{
    fetch(`http://${host}:3001/getUpdateHistory`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(query)
    }).then(res=>res.json())
      .then(result=>{
        dispatch(_getUpdateHistory(result.doc));
      })
      .catch(err=>dispatch(snackbarMessage('服务器出错: '+err)))
  }
);

export const handleSkip = (num) =>(
  (dispatch,getState)=>{
    dispatch(getUpdateHistory({
      author:getState().historyReducer.user,
      startDate:getState().historyReducer.date.toLocaleDateString(),
      endDate:new Date(getState().historyReducer.date.getTime()+24*60*60*1000).toLocaleDateString(),
      skip:num,
    }))
  }
);

let j = 0;

export const handlePageUp = () =>(
  (dispatch,getState)=>{
    dispatch(getUpdateHistory({
      author:getState().historyReducer.user,
      startDate:getState().historyReducer.date.toLocaleDateString(),
      endDate:new Date(getState().historyReducer.date.getTime()+24*60*60*1000).toLocaleDateString(),
      skip:--j,
    }));
    if(j<0) j=0;
    console.log(j);
    dispatch(page(j));
  }
);

export const handlePageDown = () =>(
  (dispatch,getState)=>{
    dispatch(getUpdateHistory({
      author:getState().historyReducer.user,
      startDate:getState().historyReducer.date.toLocaleDateString(),
      endDate:new Date(getState().historyReducer.date.getTime()+24*60*60*1000).toLocaleDateString(),
      skip:++j,
    }));
    console.log(j);
    dispatch(page(j));
  }
);

const _handleDatePicker = (date) =>({
  type:'DATE_PICKER',
  date,
});

export const handleDatePicker = (date) =>(
  (dispatch,getState)=>{
    dispatch(_handleDatePicker(date));
    dispatch(getUpdateHistory({
      author:getState().historyReducer.user,
      startDate:getState().historyReducer.date.toLocaleDateString(),
      endDate:new Date(getState().historyReducer.date.getTime()+24*60*60*1000).toLocaleDateString(),
      skip:0,
    }));
  }
);

const _getUserList = (userList)=>({
  type:'GET_USER_LIST',
  userList,
});

export const getUserList = ()=>(
  dispatch=>{
    fetch(`http://${host}:3001/getAllUserList`,{credentials:'include'})
      .then(res=>res.json())
      .then(result=>{
        const userList = [...new Set(result.map(userInfo=>userInfo.userName))];
        dispatch(_getUserList(userList));
      })
  }
);

const _handleUser = (user) =>({
  type:'HANDLE_USERS',
  user,
});

export const handleUser = (user)=>(
  (dispatch,getState)=>{
    dispatch(_handleUser(user));

    dispatch(getUpdateHistory({
      author:getState().historyReducer.user,
      startDate:getState().historyReducer.date.toLocaleDateString(),
      endDate:new Date(getState().historyReducer.date.getTime()+24*60*60*1000).toLocaleDateString(),
    }));
  }
);

//todo 用户全选所有条件还没做
// const _handleUserCheck = (userCheck) =>({
//   type:'HANDLE_CHECK',
//   userCheck,
// });
//
// export const handleUserCheck = (check) =>(
//   (dispatch,getState)=>{
//     dispatch(_handleCheck(check));
//
//     if(getState().historyReducer.check){
//
//     }
//   }
// );
