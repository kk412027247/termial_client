export default (state={},action)=>{
  switch(action.type){
    case 'TOGGLE_SPIDER':{
      return{
        ...state,
        slideIndex:action.slideIndex
      }
    }
    case 'DATA_EXIST':{
      return{
        ...state,
        dataExist:action.dataExist
      }
    }
    case 'UPLOAD_EXIST':{
      return{
        ...state,
        uploadExist:action.uploadExist,
      }
    }
    case 'HANDLE_VALID':{
      return{
        ...state,
        valid:action.valid,
      }
    }
    case '_DATA_EXIST':{
      return{
        ...state,
        _dataExist:action._dataExist
      }
    }
    case '_UPLOAD_EXIST':{
      return{
        ...state,
        _uploadExist:action._uploadExist
      }
    }
    case '_VALID':{
      return{
        ...state,
        _valid:action._valid
      }
    }
    case 'HANDLE_FOCUS':{
      return{
        ...state,
        focus:action.focus
      }
    }
    default:{
      return state;
    }
  }
}
