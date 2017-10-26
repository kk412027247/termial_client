let nextFetchId = 0;

export const fetchDataStarted = () =>({
  type:'FETCH_STARTED'
});

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

export const fetchDialog = () =>({
  type: 'FETCH_DIALOG',
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

    //dispatchIfValid(fetchDataStarted());

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
    console.log(detail[0]);
    dispatch(saveDetail(detail[0]))
  }
);
