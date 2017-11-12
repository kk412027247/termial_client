let nextFetchId = 0;

export const fetchDataStarted = () =>({
  type:'FETCH_STARTED'
});

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

export const _changeDetail = (obj) =>({
  type: 'CHANGE_DETAIL',
  updateDetail:obj
});


export const handleSnackbar = () =>({
  type: 'HANDLE_SNACKBAR',
});


export const addInput = (event,value)=>({
  type: 'ADD_INPUT',
  addInput: value,
});


//异步redux 发起的是一个函数，
export const fetchData = (event, newValue) => (
  dispatch=>{
    const fetchId= ++ nextFetchId;
    const dispatchIfValid = (action)=>{
      if(fetchId === nextFetchId){
        return dispatch(action);
      }
    };

    dispatch(fetchInput(newValue));
    //dispatchIfValid(fetchDataStarted());

    fetch('http://127.0.0.1:3001/query',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'query': newValue.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ')})
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.length !== 0) dispatchIfValid(fetchDataSuccess(result))
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
    fetch('http://127.0.0.1:3001/query',{
      method:'post',
      headers:{'Content-Type':'application/json'},
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

export const changeDetail = (event, newValue) =>(
  (dispatch, getState) => {
    // 下面不是一个纯函数了，但是为了缩减代码，想不出其他办法了，下面这数据会把自己再结构一遍
    dispatch(_changeDetail({
      ...getState().reducerFetch.detail,
      ...getState().reducerFetch.updateDetail,
      [event.target.id]:newValue,
    }))
  }
);

export const updateDetail = ()=>(
  (dispatch,getState)=>{
    fetch('http://127.0.0.1:3001/updates',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'update':getState().reducerFetch.updateDetail})
    })
    .then(res=>{
      dispatch(fetchDialog());
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



export const add = ()=>(
  (dispatch, getState)=>{
    fetch('http://127.0.0.1:3001/add',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({'add':getState().reducerFetch.addInput})
    })
    .then(res=>res.json())
    .then(
      detail=>dispatch(_saveDetail(detail))
    )
  }
);
