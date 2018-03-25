import host from '../host.js';
import {snackbarMessage} from './fetchActions';
import 'whatwg-fetch';

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


const conversion = (data) => data.map(item=>({...item,'TAC': Number(item.TAC)}));


const _handleDateExist = (data)=>({
  type:'_DATA_EXIST',
  _dataExist:conversion(data),
});

const _handleUploadExist = (data)=>({
  type:'_UPLOAD_EXIST',
  _uploadExist:conversion(data),
});

const _handleValid = (data) =>({
   type:'_VALID',
  _valid:conversion(data),
});


export const uploadFile = (event) =>(
  (dispatch)=>{
    if(event.target.files[0]){
      //上传新数据的时候，清理一下原有数据
      dispatch(handleDateExist([]));
      dispatch(handleUploadExist([]));
      dispatch(handleValid([]));
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.formData = formData;
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
            dispatch(_handleDateExist(result.dataExist));
            dispatch(_handleUploadExist(result.uploadExist));
            dispatch(_handleValid(result.valid));
          }else{
            dispatch(snackbarMessage(result))
          }
        }).catch(err=>{
          dispatch(snackbarMessage(JSON.stringify(err)));
      })
    }
  }
);


export const handleFilter = (label, _id)=>(
  (dispatch,getState)=>{
    const selected = getState().addReducer['_'+label].filter(item=> item._id === _id)[0];
    const unselected = getState().addReducer['_'+label].filter(item=> item._id !== _id);
    switch(label){
      case 'dataExist':{
        dispatch(_handleDateExist([...unselected, {...selected, invalid: !selected.invalid}]));
        break;
      }
      case 'uploadExist':{
        dispatch(_handleUploadExist([...unselected, {...selected, invalid: !selected.invalid}]));
        break;
      }
      case 'valid':{
        dispatch(_handleValid([...unselected, {...selected, invalid: !selected.invalid}]));
        break;
      }
      default:
        break;
    }
    
  }
);

const removeId = (data) => data.map(item=>{
  let {_id,..._item} = item;
  _id = null;
  return {..._item}
});


//提交上传的数据
export const handleFetch = (label)=>(
  (dispatch, getState)=>{
    if(label === 'valid'){
      //把_id这个索引去掉，如果带了这个提交，会保存不成功，并且会引起冲突。
      const validDoc = removeId(getState().addReducer._valid);
      fetch(`http://${host}:3001/createTac`,{
        credentials: 'include',
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({docs:validDoc.filter(item=>!item.invalid).map(item=>({...item,TAC:"'"+item.TAC}))}),
      }).then(res=>res.json())
        .then(()=>{
          dispatch(snackbarMessage('保存成功'));
        })
        .catch(err=>dispatch(snackbarMessage(JSON.stringify(err))));
      dispatch(handleValid([]));

    }
    if(label === 'uploadExist'){
      fetch(`http://${host}:3001/updateTac`,{
        credentials: 'include',
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({docs:getState().addReducer._uploadExist.filter(item=>!item.invalid).map(item=>({...item,TAC:"'"+item.TAC}))})
      }).then(res=>res.json())
        .then(()=>{
          dispatch(snackbarMessage('保存成功'));
        }).catch(err=>dispatch(snackbarMessage(JSON.stringify(err))));
      dispatch(handleUploadExist([]));
    }
    if(label === 'dataExist'){
      fetch(`http://${host}:3001/updateTac`,{
        credentials: 'include',
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({docs:getState().addReducer._dataExist.filter(item=>!item.invalid).map(item=>({...item,TAC:"'"+item.TAC}))})
      }).then(res=>res.json())
        .then(()=>{
          dispatch(snackbarMessage('保存成功'));
        }).catch(err=>dispatch(snackbarMessage(JSON.stringify(err))));
      dispatch(handleDateExist([]));
    }
  }
);

export const handleFocus = (object)=>({
  type:'HANDLE_FOCUS',
  focus:object,
});

export const handleChange = (event, value)=>(
  (dispatch, getState)=>{
    const{label, _id, _key} = getState().addReducer.focus;

    if(label === 'dataExist') {
      const oldKeyValue = getState().addReducer._dataExist.filter(item => item._id === _id)[0];
      //const _value = !Number(value) ? value : Number(value);
      const newKeyValue = [...getState().addReducer._dataExist.filter(item => item._id !== _id),{...oldKeyValue, [_key]:value}];
      dispatch(_handleDateExist(newKeyValue))
    }

    if(label === 'uploadExist') {
      const oldKeyValue = getState().addReducer._uploadExist.filter(item => item._id === _id)[0];
      //const _value = !Number(value) ? value : Number(value);
      const newKeyValue = [...getState().addReducer._uploadExist.filter(item => item._id !== _id),{...oldKeyValue, [_key]:value}];
      dispatch(_handleUploadExist(newKeyValue))
    }
    
    if(label === 'valid'){
      const oldKeyValue = getState().addReducer._valid.filter(item => item._id === _id)[0];
      //const _value = !Number(value) ? value : Number(value);
      const newKeyValue = [...getState().addReducer._valid.filter(item => item._id !== _id),{...oldKeyValue, [_key]:value}];
      dispatch(_handleValid(newKeyValue))
    }
  }
);


