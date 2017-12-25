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
    default:{
      return state;
    }
  }
}
