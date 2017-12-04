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
    case 'DATE_PICKER':{
      return{
        ...state,
        date:action.date,
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
    default:{
      return state;
    }
  }
}
