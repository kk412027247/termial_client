export default (state={}, action)=>{
  switch(action.type){
    case 'GET_UPDATE_HISTORY': {
      return{
        ...state,
        updateHistory:action.updateHistory
      }
    }
    case 'PAGE':{
      return{
        ...state,
        pages:action.pages
      }
    }
    default:{
      return state;
    }
  }
}
