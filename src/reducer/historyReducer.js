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


    case 'HANDLE_USERS':{
      return{
        ...state,
        user:action.user
      }
    }
    case 'GET_USER_LIST':{
      return{
        ...state,
        userList:action.userList,
      }
    }
    case 'HANDLE_CHECK':{
      return{
        ...state,
        check:action.check,
      }
    }







    case 'HISTORY':{
      return{
        ...state,
        history:action.history,
      }
    }
    case 'HANDLE_IMAGE':{
      return{
        ...state,
        url:action.url,
      }
    }
    case 'TOGGLE_IMAGE':{
      return{
        ...state,
        openImage: !state.openImage
      }
    }
    case 'TOGGLE_CACHE':{
      return{
        ...state,
        cache: !state.cache,
      }
    }
    default:{
      return state;
    }
  }
}
