export default (state={}, action)=>{
  switch(action.type){
    case 'GET_UPDATE_HISTORY': {
      return{
        ...state,
        updateHistory:action.updateHistory
      }
    }
    case 'HANDLE_PAGE':{
      return{
        ...state,
        page:action.page
      }
    }
    default:{
      return state;
    }
  }
}
