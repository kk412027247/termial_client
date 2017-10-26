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
    default:{
      return state ;
    }
  }
}
