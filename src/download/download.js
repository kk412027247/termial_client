import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {snackbarMessage} from '../fetchActions'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './download.css';
//import CircularProgress from 'material-ui/CircularProgress';



class Download extends React.Component {
  componentDidUpdate(){
    console.log('done')
  }

  render(){
    const {urls, snackbarMessage} = this.props;
    return(
      <div>
        {urls ? <RaisedButton label='下载数据' onClick={snackbarMessage} href={urls}/> : ''}
      </div>

    )
  }



  // render(){
  //   const {downloadStatus,download,urls} = this.props;
  //   return(
  //     <div className='download' >
  //       <ReactCSSTransitionGroup
  //         transitionName='downloadButton'
  //         transitionEnterTimeout={500}
  //         transitionLeaveTimeout={0.1}
  //       >
  //         { urls ? <RaisedButton label='数据下载' onClick={download}/> : ''}
  //          <div>{ downloadStatus==='downloading' ? <CircularProgress/> : ''}</div>
  //
  //       </ReactCSSTransitionGroup>
  //     </div>
  //   )
  // }
}

const mapStateToProps = (state)=>({
  urls:state.reducerFetch.downloadQuery,
  //downloadStatus:state.reducerFetch.downloadStatus
});

const mapDispatchToProps = (dispatch)=>({
  snackbarMessage:()=>dispatch(snackbarMessage('正在下载，请稍后'))
});

export default connect(mapStateToProps,mapDispatchToProps)(Download);
