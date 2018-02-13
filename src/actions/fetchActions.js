//import {push} from 'react-router-redux';
import host from '../host.js';
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
    const fetchId= ++ nextFetchId;
    //检验返回延时，如果延时产生不一致，则放弃返回值。
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
    //console.log(query);
    dispatch(fetchInput(newValue));

    fetch(`http://${host}:3001/query`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'query': query})
    }).then(res=>res.json())
      .then(result=>{
        dispatchIfValid(fetchDataSuccess(result))
      }).catch(err=>{
        dispatchIfValid(fetchDataFailure(err))
      });
  }
);

// export const getTacForInfo = (event, newValue) => (
//   dispatch=>{
//     const fetchId= ++ nextFetchId;
//     const dispatchIfValid = (action)=>{
//       if(fetchId === nextFetchId){
//         return dispatch(action);
//       }
//     };
//     fetch(`http://${host}:3001/getTacForInfo`,{
//       method:'post',
//       credentials:'include',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify({'tac': newValue.replace(/[\s]*/,'')})
//     })
//     .then(res=>res.json())
//     .then(result=>{
//       if(Array.isArray(result)){
//         dispatchIfValid(fetchDataSuccess(result))
//       }else{
//         dispatchIfValid(fetchDataSuccess([]))
//       }
//     })
//     .catch(err=>{
//       dispatchIfValid(fetchDataFailure(err))
//     })
//   }
// );



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
      body:JSON.stringify({'query': getState().fetchReducer.input})
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
  dispatch=>{
    fetch(`http://${host}:3001/getInfoTac`,{
      method:'post',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({'_id':id})
    }).then(res=>res.json())
      .then(result=>dispatch(saveDetail(result)))
      .catch(err=>dispatch(snackbarMessage(JSON.stringify(err))));
    // const detail = getState().fetchReducer.result.filter(item=>item._id === id);
    // dispatch(saveDetail(detail[0]))
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
      ...getState().fetchReducer.detail,
      ...getState().fetchReducer.updateDetail,
      [event.target.id]:newValue.replace(/,/g,'，').replace(/(^\s*)|(\s*$)/g,""),
    }))
  }
);

export const updateDetail = ()=>(
  (dispatch,getState)=>{
    const update = {...getState().fetchReducer.updateDetail};
    fetch(`http://${host}:3001/updates`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({update}),
    })
    .then(res=>res.json())
    .then((result)=>{
      if(!!result._id) {
        dispatch(snackbarMessage('修改成功'))
      }else if(Object.keys(result).length === 0){
        dispatch(snackbarMessage('没有任何修改'))
      }
    })
    .catch(err=>{
      dispatch(snackbarMessage('修改失败',JSON.stringify(err)))
    });
  }
);

const spiderStatus = (status) =>({
  type:'SPIDER_STATUS',
  status,
});

export const add = ()=>(
  (dispatch, getState)=>{
    if(getState().fetchReducer.addInput===''){
      dispatch(snackbarMessage('请输入地址'));
      return;
    }
    dispatch(spiderStatus('fetching'));
    dispatch(cleanDetail());
    fetch(`http://${host}:3001/add`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'add':getState().fetchReducer.addInput})
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

        dispatch(_saveDetail(detail));
        dispatch(spiderStatus('haveDone'));
      }
    ).catch(
      err=>{
        dispatch(snackbarMessage(JSON.stringify(err)));
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
        userName:getState().fetchReducer.userName,
        passWord:getState().fetchReducer.passWord
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
      credentials:'include',
    })
    .then(res=>res.json())
    .then(userInfo=>{
      //console.log('userInfo',userInfo);
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

// const changeDownloadInfo = (info)=>({
//   type:'DOWNLOAD_INFO',
//   downloadInfo:info,
// });
//
// const changeDownloadId = (id)=>({
//   type:'DOWNLOAD_ID',
//   downloadId:id,
// });

const _createUrl = (url)=>({
  type:'CREATE_URL',
  infoUrl:url.infoUrl,
  tacUrl:url.tacUrl
});

const createUrl = ()=>(
  (dispatch,getState)=>{
    const infoUrl = getState()
      .fetchReducer.combineInfo
      .map(info=>info._id)
      .reduce((pre,curr)=>(pre.concat(`_id=${curr}&`)),`http://${host}:3001/download?`)
      .replace(/&$/,'');

    const query = getState().fetchReducer.combineInfo.map(info=>({"品牌1":info.brand, "型号1" :info.model}));
    if(query.length ===0 ){
      dispatch(_createUrl({infoUrl:'',tacUrl:''}));
      return;
    }

    fetch(`http://${host}:3001/getTacId`,{
      credentials: 'include',
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(query)
    }).then(res=>res.json())
      .then(result=>{
        const tacUrl = result.map(info=>info._id)
          .reduce((pre,curr)=>(pre.concat(`_id=${curr}&`)),`http://${host}:3001/downloadTac?`)
          .replace(/&$/,'');
        dispatch(_createUrl({infoUrl,tacUrl}))
      }).catch(err=>dispatch(snackbarMessage('服务器出错:'+err)));
  }
);

const combine = (info)=>({
  type:'COMBINE',
  combineInfo:info,
});

export const downloadQuery = (index)=>(
  (dispatch,getState)=>{
    let _IDs ;
    
    if(index==='all') {
      _IDs = getState().fetchReducer.result.map((item,index)=>index);
    }else{
      _IDs = index;
    }

    if(_IDs !== 'none' && _IDs.length !== 0){
      let IDs = _IDs.map(item=>(getState().fetchReducer.result[item]._id))
                    .reduce((pre,curr)=>(pre.concat(`_id=${curr}&`)),`http://${host}:3001/download?`)
                    .replace(/&$/,'');

      const _combineInfo = _IDs.map(item=>({
        brand:getState().fetchReducer.result[item]["厂商(中文)"],
        model:getState().fetchReducer.result[item]["型号"],
        _id:getState().fetchReducer.result[item]._id,
      }));

      //用reduce做了一个非纯函数，用来保存信息，set过滤数组不同对象的做法不行，因为不能对比两个对象。
      const combineInfo = _combineInfo.reduce((pre,curr)=>{
        if(!JSON.stringify(getState().fetchReducer.combineInfo).includes(JSON.stringify(curr))){
          return [...pre,curr]
        }else{
          return pre
        }
      },getState().fetchReducer.combineInfo);
      dispatch(_downloadQuery(IDs));
      dispatch(combine(combineInfo));
      dispatch(createUrl())
    }else{
      let IDs = '';
      setTimeout(()=>{
        dispatch(_downloadQuery(IDs));
      },50);
    }
  }
);

export const handleCombine = (_id)=>(
  (dispatch,getState)=>{
    const combineInfo = getState().fetchReducer.combineInfo.filter(info=>info._id !== _id);
    dispatch(combine(combineInfo));
    dispatch(createUrl());
  }
);



// const downloadStatus = (status)=>({
//   type:'DOWNLOAD_STATUS',
//   downloadStatus:status,
// });

export const snackbarMessage = (message)=>({
  type:'SNACKBAR_MESSAGE',
  snackbarMessage:message,
  snackbar:true,
});



// export const download = ()=>(
//   (dispatch,getState)=>{
//     dispatch(downloadStatus('downloading'));
//     fetch(getState().fetchReducer.downloadQuery)
//       .then(res => res.blob())
//       .then(blob => {
//         const a = document.createElement('a');
//         const url = window.URL.createObjectURL(blob);
//         a.href = url;
//         a.download = `${Date.now()}.csv`;
//         a.click();
//         window.URL.revokeObjectURL(url);
//         dispatch(downloadStatus('downloaded'));
//         dispatch(snackbarMessage('下载已完成'))
//       });
//   }
// );

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
        userName:getState().fetchReducer.userInfo.userName,
        passWord:getState().fetchReducer.passWord,
        newPassWord:getState().fetchReducer.newPassWord,
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

export const handleDetailImageUrl = (detailImageUrl) =>(
  (dispatch,getState)=>{
    dispatch({
      type:'DETAIL_IMAGE_URL',
      detailImageUrl:getState().fetchReducer.detailImageUrl === '' ? detailImageUrl :'',
    })
  }
);





