import {push} from 'react-router-redux';

export default ()=>(
  dispatch=>{
    dispatch(push('/signIn'))
  }
)
