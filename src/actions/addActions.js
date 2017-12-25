import host from '../host.js';
import {snackbarMessage} from './fetchActions';

export const toggleSpider = (toggle)=>({
  type:'TOGGLE_SPIDER',
  slideIndex: toggle ? 1 : 0,
});

const handleDateExist = (data)=>({
  type:'DATA_EXIST',
  dataExist:data,
});

const handleUploadExist = (data)=>({
  type:'UPLOAD_EXIST',
  uploadExist:data,
});

const handleValid = (data)=>({
  type:'HANDLE_VALID',
  valid:data,
});

export const uploadFile = (event) =>(
  (dispatch)=>{
    if(event.target.files[0]){
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      fetch(`http://${host}:3001/uploadTac`,{
        method:'post',
        credentials:'include',
        body:formData,
      }).then(res=>res.json())
        .then(result=>{
          if(typeof result !== 'string'){
            dispatch(handleDateExist(result.dataExist));
            dispatch(handleUploadExist(result.uploadExist));
            dispatch(handleValid(result.valid));
          }else{
            dispatch(snackbarMessage(result))
          }
        }).catch(err=>{
          dispatch(snackbarMessage(err));
      })
    }
  }
);
