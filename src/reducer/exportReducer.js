export default (state={},action)=>{
  switch(action.type){
    case 'HANDLE_START_DATE':{
      return{
        ...state,
        startDate:action.startDate,
      }
    }
    case 'HANDLE_END_DATE':{
      return{
        ...state,
        endDate:action.endDate,
      }
    }
    case 'HANDLE_URL':{
      return{
        ...state,
        url:action.url
      }
    }
    case 'CHECK_DATE_VALID':{
      return{
        ...state,
        bool:action.bool,
      }
    }
    default: {
      return state
    }
  }
}
