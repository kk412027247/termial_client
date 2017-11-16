import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {download} from '../fetchActions'
import './download.css';
import CircularProgress from 'material-ui/CircularProgress';



class Download extends React.Component {
  componentDidUpdate(){
    console.log('done')
  }
  render(){
     const {downloadStatus,download,urls} = this.props;
    
    
    return(
      <div className='download' >
        { urls ? <RaisedButton label='数据下载' onClick={download}/> : ''}
        { downloadStatus==='downloading' ? <CircularProgress/> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  urls:state.reducerFetch.downloadQuery,
  downloadStatus:state.reducerFetch.downloadStatus
});

const mapDispatchToProps = (dispatch)=>({
  download:()=>dispatch(download())
});

export default connect(mapStateToProps,mapDispatchToProps)(Download);
