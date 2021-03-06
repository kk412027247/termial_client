

export default (state = {}, action)=>{
  switch(action.type){
    case 'FETCH_STARTED':{
      return {
        ...state,
        status: 'LOADING',
        result:[],
      }
    }
    case 'FETCH_SUCCESS':{
      return {
        ...state,
        status: 'SUCCESS',
        result:action.result,
      }
    }
    case 'FETCH_EMPTY':{
      return{
        ...state,
        status:'EMPTY',
        snackbar:action.snackbar,
        snackbarMessage:action.snackbarMessage
      }
    }
    case  'FETCH_FAILURE':{
      return{
        ...state,
        status: 'FAILURE',
        result:[],
      }
    }
    case 'FETCH_INPUT':{
      return{
        ...state,
        input:action.input,
      }
    }
    case 'SEARCH_DETAIL':{
      return{
        ...state,
        updateDetail:action.detail===state.detail._id ? state.updateDetail : {},
        detail:action.detail,
        dialog:action.dialog,
      }
    }
    case '_SEARCH_DETAIL':{
      return{
        ...state,
        detail:action.detail,
      }
    }
    case 'FETCH_DIALOG':{
      return{
        ...state,
        dialog: false,
        detail:{},
        spiderStatus:'ready'
      }
    }
    case 'CHANGE_DETAIL':{
      return{
        ...state,
        updateDetail: action.updateDetail,
      }
    }
    case 'UPDATE_SUCCESS':{
      return{
        ...state,
        result:state.result.map(item=>{
          if(item._id === state.updateDetail._id){
            return {...item,...state.updateDetail}
          }else{
            return item
          }
        }),
        snackbar:action.snackbar,
        snackbarMessage:action.snackbarMessage
      }
    }
    case 'UPDATE_FAILURE':{
      return{
        ...state,
        snackbar:action.snackbar,
        snackbarMessage:action.snackbarMessage
      }
    }
    case 'HANDLE_SNACKBAR':{
      return{
        ...state,
        snackbar: false,
      }
    }
    case 'ADD_INPUT':{
      return{
        ...state,
        addInput:action.addInput,
      }
    }
    case 'CLEAN_DETAIL':{
      return{
        ...state,
        detail:{},
      }
    }
    case'SIGN_IN':{
      return{
        ...state,
        userInfo:action.userInfo
      }
    }
    case 'HANDLE_USERNAME':{
      return{
        ...state,
        userName:action.userName,
      }
    }

    case 'CHANGE_PASSWORD':{
      return{
        ...state,
        newPassWord:action.newPassWord
      }
    }
    case 'HANDLE_PASSWORD':{
      return{
        ...state,
        passWord:action.passWord,
      }
    }
    case 'DOWNLOAD_QUERY':{
      return{
        ...state,
        downloadQuery:action.query,
      }
    }
    case 'DOWNLOAD_STATUS':{
      return{
        ...state,
        downloadStatus:action.downloadStatus
      }
    }
    case 'SNACKBAR_MESSAGE':{
      return{
        ...state,
        snackbarMessage:action.snackbarMessage,
        snackbar:action.snackbar,
      }
    }

    case 'HANDLE_CHANGE_PASSWORD':{
      return{
        ...state,
        changePasswordDialog:!state.changePasswordDialog
      }
    }
    case 'SPIDER_STATUS':{
      return{
        ...state,
        spiderStatus:action.status,
      }
    }
    case 'CREATE_URL':{
      return{
        ...state,
        infoUrl:action.infoUrl,
        tacUrl:action.tacUrl,
      }
    }
    case 'COMBINE':{
      return{
        ...state,
        combineInfo:action.combineInfo,
      }
    }
    case 'DETAIL_IMAGE_URL':{
      return{
        ...state,
        detailImageUrl:action.detailImageUrl
      }
    }
    case 'DETAIL_ID':{
      return{
        ...state,
        detailId:action.detailId,
      }
    }
    default:{
      return state ;
    }
  }
}
