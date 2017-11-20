//import {push} from 'react-router-redux';
import host from './host.js';
import 'whatwg-fetch';

let nextFetchId = 0;

// export const fetchDataStarted = () =>({
//   type:'FETCH_STARTED'
// });

export const fetchDataEmpty = ()=>({
  type:'FETCH_EMPTY',
  snackbar:true,
  snackbarMessage: '没有匹配信息，请更新关键字',
});

const updateSuccess = ()=>({
  type:'UPDATE_SUCCESS',
  snackbar:true,
  snackbarMessage: '修改成功',
});

const updateFailure = ()=>({
  type:'UPDATE_FAILURE',
  snackbar:true,
  snackbarMessage: '修改失败',
});


export const fetchDataSuccess = (result) =>({
  type: 'FETCH_SUCCESS',
  result,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_FAILURE',
  error,
});

export const fetchInput = (newValue)=>({
  type: 'FETCH_INPUT',
  input:newValue.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' '),
});

export const saveDetail = (value)=>({
  type:'SEARCH_DETAIL',
  detail:value,
  dialog: true,
});

const _saveDetail = (value)=>({
  type:'_SEARCH_DETAIL',
  detail:value,
});

export const fetchDialog = () =>({
  type: 'FETCH_DIALOG',
});




export const handleSnackbar = () =>({
  type: 'HANDLE_SNACKBAR',
});


export const addInput = (event,value)=>({
  type: 'ADD_INPUT',
  addInput: value,
});


const cleanDetail = () =>({
  type:'CLEAN_DETAIL'
});

export const fetchData = (event, newValue) => (
  dispatch=>{
    //console.log(newValue);
    const fetchId= ++ nextFetchId;
    const dispatchIfValid = (action)=>{
      if(fetchId === nextFetchId){
        return dispatch(action);
      }
    };
    const query = newValue.replace(/(^\s*)|(\s*$)/g, '')
                        .replace(/\s+/g, ' ').split(' ')
                        .reduce((prev,curr)=>([...prev,`"${curr}"`]),[])
                        .toString()
                        .replace(/,/g,' ');

    dispatch(fetchInput(newValue));
    //dispatchIfValid(fetchDataStarted());

    fetch(`http://${host}:3001/query`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'query': query})
    })
    .then(res=>res.json())
    .then(result=>{
      dispatchIfValid(fetchDataSuccess(result))
      //if(result.length !== 0) dispatchIfValid(fetchDataSuccess(result))
    })
    .catch(err=>{
      dispatchIfValid(fetchDataFailure(err))
    })

  }
);

export const searchData = () => (
  (dispatch,getState)=>{
    const fetchId= ++ nextFetchId;
    const dispatchIfValid = (action)=>{
      if(fetchId === nextFetchId){
        return dispatch(action);
      }
    };
    fetch(`http://${host}:3001/query`,{
      method:'post',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({'query': getState().reducerFetch.input})
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.length === 0) {
        dispatch(fetchDataEmpty())
      }else{
        dispatchIfValid(fetchDataSuccess(result))
      }

    })
    .catch(err=>{
      dispatchIfValid(fetchDataFailure(err))
    })
  }
);

export const showDetail = (id) =>(
  (dispatch, getState)=>{
    const detail = getState().reducerFetch.result.filter(item=>item._id === id);
    //console.log(detail[0]);
    dispatch(saveDetail(detail[0]))
  }
);

export const _changeDetail = (obj) =>({
  type: 'CHANGE_DETAIL',
  updateDetail:obj
});

export const changeDetail = (event, newValue) =>(
  (dispatch, getState) => {
    // 下面不是一个纯函数了，但是为了缩减代码，想不出其他办法了，下面这数据会把自己再结构一遍
    dispatch(_changeDetail({
      ...getState().reducerFetch.detail,
      ...getState().reducerFetch.updateDetail,
      [event.target.id]:newValue.replace(/,/g,'，').replace(/(^\s*)|(\s*$)/g,""),
    }))
  }
);

export const updateDetail = ()=>(
  (dispatch,getState)=>{
    fetch(`http://${host}:3001/updates`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'update':getState().reducerFetch.updateDetail})
    })
    .then(res=>{
      //dispatch(fetchDialog());
      dispatch(updateSuccess());
      return res.json()
    })
    .then(console.log)
    .catch(err=>{
      console.log(err);
      updateFailure()
    });
  }
);

const spiderStatus = (status) =>({
  type:'SPIDER_STATUS',
  status,
});

export const add = ()=>(
  (dispatch, getState)=>{
    if(getState().reducerFetch.addInput===''){
      dispatch(snackbarMessage('请输入地址'));
      return;
    }
    dispatch(spiderStatus('fetching'));
    dispatch(cleanDetail());
    fetch(`http://${host}:3001/add`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'add':getState().reducerFetch.addInput})
    })
    .then(res=>res.json())
    .then(
      detail=>{
        if(detail.status==='exist'){
          dispatch(snackbarMessage('该信息已经存在'))
        }
        if(detail.status==='invalid' || detail.code==='ENOTFOUND'){
          dispatch(snackbarMessage('地址无效，请更改后输入'));
          dispatch(spiderStatus('failure'));
          return;
        }
        dispatch(spiderStatus('haveDone'));
        dispatch(_saveDetail(detail))
      }
    ).catch(
      err=>{
        dispatch(snackbarMessage(err));
        dispatch(spiderStatus('spiderFailure'));

      }
    )
  }
);

const _signIn =(userInfo) =>({
  type: 'SIGN_IN',
  userInfo: userInfo
});

export const signIn = () =>(
  (dispatch,getState)=>{
    fetch(`http://${host}:3001/signIn`,{
      credentials: 'include',
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        userName:getState().reducerFetch.userName,
        passWord:getState().reducerFetch.passWord
      })
    })
    .then(res=>res.json())
    .then(userInfo=> {
      //dispatch(push('/'));
      dispatch(_signIn(userInfo))
    })
    .catch(console.log)
  }
);

export const handleUserName = (event,value) =>({
  type:'HANDLE_USERNAME',
  userName:value,
});

export const handlePassWord = (event,value) =>({
  type:'HANDLE_PASSWORD',
  passWord:value,
});

export const checkAuth = ()=>(
  dispatch=>{
    fetch(`http://${host}:3001/getSession`,{
      headers:{'Content-Type':'application/json'},
      credentials:'include',
    })
    .then(res=>res.json())
    .then(userInfo=>{
      console.log('userInfo',userInfo);
      dispatch(_signIn(userInfo))
    })
    .catch(console.log)
  }
);

export const signOut =()=>(
  dispatch=>{
    fetch(`http://${host}:3001/signOut`,{
      credentials:'include'
    })
    .then(res=>res.json())
    .then(message=>{
      console.log(message);
      //dispatch(push('/signIn'));
      dispatch(_signIn({}));
    })
  }
);

const _downloadQuery = (query)=>({
  type:'DOWNLOAD_QUERY',
  query:query,
});

export const downloadQuery = (index)=>(
  (dispatch,getState)=>{
    let _IDs ;
    
    if(index==='all') {
      _IDs = getState().reducerFetch.result.map((item,index)=>index);
    }else{
      _IDs = index;
    }


    if(_IDs !== 'none' && _IDs.length !== 0){
      let IDs = _IDs.map(item=>(getState().reducerFetch.result[item]._id))
                    .reduce((pre,curr)=>(pre.concat(`_id=${curr}&`)),`http://${host}:3001/download?`)
                    .replace(/&$/,'');
      //console.log(IDs);
      dispatch(_downloadQuery(IDs))
    }else{
      let IDs = '';
      //console.log(IDs);
      setTimeout(()=>{
        dispatch(_downloadQuery(IDs));
      },50);


    }
  }
);

const downloadStatus = (status)=>({
  type:'DOWNLOAD_STATUS',
  downloadStatus:status,
});

const snackbarMessage = (message)=>({
  type:'SNACKBAR_MESSAGE',
  snackbarMessage:message,
  snackbar:true,
});



export const download = ()=>(
  (dispatch,getState)=>{
    dispatch(downloadStatus('downloading'));
    fetch(getState().reducerFetch.downloadQuery)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `${Date.now()}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        dispatch(downloadStatus('downloaded'));
        dispatch(snackbarMessage('下载已完成'))
      });
  }
);

export const pressEnter = (event)=>(
  (dispatch)=>{
    if(event.keyCode===13){dispatch(signIn())}
  }
);

export const handleNewPassword = (event,value)=>({
  type:'CHANGE_PASSWORD',
  newPassWord:value,
});


export const changePassword = ()=>(
  (dispatch,getState)=>{
    fetch(`http://${host}:3001/changePassword`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        userName:getState().reducerFetch.userInfo.userName,
        passWord:getState().reducerFetch.passWord,
        newPassWord:getState().reducerFetch.newPassWord,
      })
    })
    .then(res=>res.json())
    .then(message=> {
      if(message.nModified ===1 &&  message.ok ===1) {
        dispatch(snackbarMessage('修改成功'));
        dispatch(handleChangePassword())
      }
      if(message.nModified ===0 &&  message.ok ===1)
        dispatch(snackbarMessage('修改失败，原密码输入错误'));
      if(message.n ===1 && message.nModified ===0 && message.ok ===1)
        dispatch(snackbarMessage('修改失败，新密码与原密码不能相同'));
    })
    .catch(message=> snackbarMessage(JSON.stringify(message)))
  }
);

export const handleChangePassword =()=>({
  type:'HANDLE_CHANGE_PASSWORD',
});
