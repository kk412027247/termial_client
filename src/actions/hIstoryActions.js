import host from '../host.js';
import 'whatwg-fetch';
import {snackbarMessage} from './fetchActions';

const _getUpdateHistory = (info)=>({
  type:'GET_UPDATE_HISTORY',
  updateHistory:info,
});

const handlePage = (page)=>({
  type:'HANDLE_PAGE',
  page,
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
        dispatch(handlePage(result.page))
      })
      .catch(err=>dispatch(snackbarMessage('服务器出错: '+err)))
  }
);
