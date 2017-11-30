import host from '../host.js';
import 'whatwg-fetch';
import {snackbarMessage} from './fetchActions'

export const addUserName = newValue =>({
  type:'ADD_USER_NAME',
  addUserName:newValue,
});

export const addUserPassWord = newValue =>({
  type:'ADD_USER_PASSWORD',
  addUserPassWord:newValue,
});

export const addUserAuth =  value =>({
  type:'ADD_USER_AUTH',
  addUserAuth:value,
});

export const resetUserPassWord = newValue =>({
  type:'RESET_USER_PASSWORD',
  resetUserPassWord:newValue,
});

export const updateUserAuth = value =>{
  return {
  type:'UPDATE_USER_AUTH',
  updateUserAuth:value,
}};

export const addUser =()=>(
  (dispatch,getState)=>{
    const addUserInfo = {
      userName:getState().adminReducer.addUserName,
      passWord:getState().adminReducer.addUserPassWord,
      level:getState().adminReducer.addUserAuth,
    };
    if(getState().adminReducer.addUserName === undefined){
      dispatch(snackbarMessage('新增失败，用户名不能为空'));
      return;
    }
    fetch(`http://${host}:3001/addUser`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(addUserInfo)
    }).then(res=>res.json())
      .then(result=>{
        if(!!result._id){
          dispatch(getUserList());
          dispatch(snackbarMessage(`用户新增成功`))
        }else{
          dispatch(snackbarMessage('新增失败,用户名重复'))
        }
      })
  }
);

const userList = (list)=>({
  type:'USER_LIST',
  userList:list,
});

export const getUserList = () => (
  dispatch=>{
    fetch(`http://${host}:3001/getUserList`,{credentials:'include'})
      .then(res=>res.json())
      .then(result=>dispatch(userList(result)));
  }
);

export const updateUser = ()=>(
  (dispatch,getState)=>{

    const info = getState().adminReducer.updateInfo;
    const passWord = getState().adminReducer.resetUserPassWord;
    const level = getState().adminReducer.updateUserAuth;

    const _info={
      _id:info._id,
      userName:info.userName,
      passWord:passWord === '' ? info.passWord : passWord,
      level:level === '' ? info.level : level,
    };

    fetch(`http://${host}:3001/updateUser`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(_info)
    }).then(res=>res.json())
      .then(result=>{
        if(!!result._id){
          dispatch(snackbarMessage('修改成功'));
          dispatch(handleUpdateUserDialog());
          dispatch(getUserList());
        }else{
          dispatch(snackbarMessage('修改失败，请刷新页面重试一遍'))
        }
      })
  }
);


const showUpdateInfo = (info)=>({
  type:'SHOW_UPDATE_INFO',
  updateInfo:info,
});


export const handleUpdateUserDialog = ()=>({
  type:'HANDLE_UPDATE_USER_DIALOG',
});

export const prepareToUpdate = (_id) =>(
  (dispatch,getState)=>{
    const info = getState().adminReducer.userList.filter(user=>user._id===_id)[0];
    dispatch(showUpdateInfo(info));
    dispatch(handleUpdateUserDialog())
  }
);

export const handleAlert = ()=>({
  type:'HANDLE_ALERT',
});

export const matchRemoveUser = (user)=>({
  type:'MATCH_REMOVE_USER',
  removeUser:user,
});

export const prepareRemoveUser = (_id)=>(
  (dispatch,getState)=>{
    const user = getState().adminReducer.userList.filter(user=>user._id===_id)[0];
    dispatch(matchRemoveUser(user));
    dispatch(handleAlert())
  }
);

export const removeUser = () =>(
  (dispatch,getState)=>{
    fetch(`http://${host}:3001/removeUser`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({_id:getState().adminReducer.removeUser._id})
    }).then(res=>res.json())
      .then(result=>{
        if(!!result._id){
          dispatch(snackbarMessage(`成功删除用户：${getState().adminReducer.removeUser.userName}`));
          dispatch(handleAlert());
          dispatch(getUserList());

        }
      })
  }
);
