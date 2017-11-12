

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
      console.log('empty');
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
    case 'FETCH_DIALOG':{
      return{
        ...state,
        dialog: !state.dialog,

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
    default:{
      return state ;
    }
  }
}
