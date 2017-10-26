

export default (state={}, action)=>{
  switch(action.type){
    case 'HANDLE_DRAWER':{
      return{
        ...state,
        drawer: !state.drawer,
      }
    }
    case 'HANDLE_FETCH':{
      return{
        ...state,
        snackbar: true,
        snackbarMessage: '没有匹配信息，请更新关键字',
      }
    }
    case 'HANDLE_INPUT':{
      return{
        ...state,
        input: action.input,
      };
    }
    case 'HANDLE_SNACKBAR':{
      return{
        ...state,
        snackbar: false,
      }
    }
    case 'HANDLE_DIALOG':{
      return{
        ...state,
        dialog: !state.dialog
      }
    }

    default:{
      return state;
    }
  }
}
