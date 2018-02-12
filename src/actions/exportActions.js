import host from '../host'

export const handleStartDate = (nothing,startDate) => (
  dispatch=>{
    dispatch({
      type:'HANDLE_START_DATE',
      startDate:startDate.toLocaleDateString(),
    });
    dispatch(handleUrl());
    dispatch(checkDateValid())
  }
);

export const handleEndDate = (nothing,endDate) => (
  dispatch=>{
    dispatch({
      type:'HANDLE_END_DATE',
      endDate:new Date(endDate.getTime()+1000*60*60*24).toLocaleDateString(),
    });
    dispatch(handleUrl());
    dispatch(checkDateValid())
  }
);

const handleUrl = ()=>(
  (dispatch,getState)=>{
    const startDate = getState().exportReducer.startDate;
    const endDate = getState().exportReducer.endDate;
    const url = `http://${host}:3001/downloadTacByDate?startDate=${startDate}&endDate=${endDate}`;
    dispatch({
      type:'HANDLE_URL',
      url,
    })
  }
);

const checkDateValid = () => (
  (dispatch,getState)=>{
    const bool = new Date(getState().exportReducer.startDate)<new Date(getState().exportReducer.endDate);
    dispatch({
      type:'CHECK_DATE_VALID',
      bool,
    })
  }
);
