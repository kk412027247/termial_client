import host from '../host.js';
import 'whatwg-fetch';
import {snackbarMessage} from './fetchActions';

export const getHistory = () =>  (
  async dispatch =>{
    const res = await fetch(`http://${host}:3001/getUserHistoryByPC`,{credentials:'include'});
    if(!res) {dispatch(snackbarMessage('连接失败')); return}
    const history = await res.json();
    dispatch({type:'HISTORY', history});
  }
);

export const handleImage = (url)=>({
  type:'HANDLE_IMAGE',
  url,
});

export const toggleImage = () =>({
  type:'TOGGLE_IMAGE',
});


