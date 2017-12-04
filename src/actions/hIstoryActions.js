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
      author:".*",
      startDate:new Date(1970-1-1).toLocaleDateString(),
      endDate:new Date(Date.now()+24*60*60*1000).toLocaleDateString(),
      skip:num,
    }))
  }
);

let j = 0;

export const handlePageUp = () =>(
  (dispatch,getState)=>{
    dispatch(getUpdateHistory({
      author:".*",
      startDate:new Date(1970-1-1).toLocaleDateString(),
      endDate:new Date(Date.now()+24*60*60*1000).toLocaleDateString(),
      skip:--j,
    }));
    if (j<0){
      j=0;
      dispatch(page(1));
    }else{
      dispatch(page(j));
    }

  }
);

export const handlePageDown = () =>(
  (dispatch,getState)=>{
    dispatch(getUpdateHistory({
      author:".*",
      startDate:new Date(1970-1-1).toLocaleDateString(),
      endDate:new Date(Date.now()+24*60*60*1000).toLocaleDateString(),
      skip:++j,
    }));
    dispatch(page(j));
  }
);
