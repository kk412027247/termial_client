import host from '../host.js';
import 'whatwg-fetch';
import {snackbarMessage} from './fetchActions';

export const getHistory = () =>(
  async (dispatch, getState) =>{
    //如果正在加载，或者请求完毕时，退出函数
    if(getState().historyReducer.loading || getState().historyReducer.stopLoading) return;
    dispatch(handleLoadingStatus(true));
    //再次请求的时候用时特别长，content download 时间特别长，具体原因还不明
    const res = await fetch(
      `http://${host}:3001/getUserHistoryByPC?skip=${getState().historyReducer.skip}`,
      {credentials:'include'}
      );
    if(!res){
      dispatch(snackbarMessage('连接失败'));
      dispatch(handleLoadingStatus(false));
      return
    }
    const history = await res.json();
    dispatch(handleLoadMore(false));
    dispatch(handleLoadingStatus(false));
    dispatch(handleHistory(
      getState().historyReducer.skip === 0 ? history: [...getState().historyReducer.history, ...history])
    );
    if(history.length<4){
      dispatch({type: 'STOP_LOADING', stopLoading:true});
      return;
    }
    dispatch({
      type:'INCREASE_SKIP',
    })
  }
);

export const toggleFirstFetchState = (bool)=>({
  type:'FIRST_FETCH_STATE',
  firstFetch:bool,
});

export const handleHistory = (history) =>({
  type:'HISTORY',
  history,
});

const handleLoadingStatus = (bool)=>({
  type:'LOADING_STATUS',
  loading:bool,
});

export const handleLoadMore = (bool)=>({
  type:'LOAD_MORE',
  loadMore:bool,
});

export const handleImage = (url)=>({
  type:'HANDLE_IMAGE',
  url,
});

export const toggleImage = () =>({
  type:'TOGGLE_IMAGE',
});


export const toggleCache = () =>({
  type:'TOGGLE_CACHE',
});

export const updateHistoryByPC = (updateInfo) =>(
  async (dispatch,getState)=>{
    const res = await fetch(`http://${host}:3001/updateHistoryByPC`,{
      method:'post',
      credentials:'include',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(updateInfo)
    });
    if(!res){dispatch(snackbarMessage('保存失败，服务器连接出错')); return}
    const result = await res.json();
    if(result === 'updateSuccess') dispatch(snackbarMessage('更新成功'));
    const pick = getState().historyReducer.history.filter(item=>!!item.cache && item.cache.TAC === updateInfo.TAC);
    console.log(pick);
    const rest = getState().historyReducer.history.filter(item=>
      !!item.status || (!!item.cache && item.cache.TAC !== updateInfo.TAC)
    );
    console.log(rest);
    console.log([{...pick[0].cache,status:'saved'},...rest]);
    if(updateInfo.status === 'saved'){
      dispatch( handleHistory([{...pick[0].cache, status:'saved',_id:pick[0].cache._id+1}, ...rest]));
    }else{
      dispatch(handleHistory(rest));
    }
  }
);

