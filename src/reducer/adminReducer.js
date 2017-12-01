export default ((state = {}, action)=>{
  switch(action.type){
    case 'ADD_USER_NAME':{
      return{
        ...state,
        addUserName:action.addUserName,
      }
    }
    case 'ADD_USER_PASSWORD':{
      return{
        ...state,
        addUserPassWord:action.addUserPassWord,
      }
    }
    case 'ADD_USER_AUTH':{
      return{
        ...state,
        addUserAuth:action.addUserAuth,
      }
    }
    case 'RESET_USER_PASSWORD':{
      return{
        ...state,
        resetUserPassWord:action.resetUserPassWord,
      }
    }
    case 'UPDATE_USER_AUTH':{
      return{
        ...state,
        updateUserAuth:action.updateUserAuth,
      }
    }
    case 'USER_LIST':{
      return{
        ...state,
        userList:action.userList,
      }
    }
    case 'HANDLE_UPDATE_USER_DIALOG':{
      return{
        ...state,
        updateUserDialog:!state.updateUserDialog,
      }
    }
    case 'SHOW_UPDATE_INFO':{
      return{
        ...state,
        updateInfo:action.updateInfo,
      }
    }
    case 'HANDLE_ALERT':{
      return{
        ...state,
        alert:!state.alert,
      }
    }
    case 'MATCH_REMOVE_USER':{
      return{
        ...state,
        removeUser:action.removeUser,
      }
    }
    default:{
      return state ;
    }
  }
})
