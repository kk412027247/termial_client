export default (state={}, action)=>{
  switch(action.type){
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
    case 'LOAD_MORE':{
      return{
        ...state,
        loadMore: action.loadMore,
      }
    }
    case 'INCREASE_SKIP':{
      return{
        ...state,
        skip: state.skip + 1
      }
    }
    case 'LOADING_STATUS':{
      return{
        ...state,
        loading:action.loading,
      }
    }
    case'STOP_LOADING':{
      return{
        ...state,
        stopLoading:action.stopLoading,
      }
    }
    case'FIRST_FETCH_STATE':{
      return{
        ...state,
        firstFetch: action.firstFetch
      }
    }
    default:{
      return state;
    }
  }
}
