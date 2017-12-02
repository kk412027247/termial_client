import React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {snackbarMessage} from '../actions/fetchActions';
import './download.css';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import CircularProgress from 'material-ui/CircularProgress';



class Download extends React.Component {
  // componentDidUpdate(){
  //   console.log('done')
  // }

  render(){
    const {infoUrl, tacUrl, snackbarMessage, auth} = this.props;
    return(
      <div>
        {((!!infoUrl || !!tacUrl) && auth>=3)
          ? <div>
            <FlatButton label='下载手机参数表' primary={true} onClick={snackbarMessage.bind(null,'参数列表正在下载')} href={infoUrl}/>
            <FlatButton label='下载TAC表' secondary={true} onClick={snackbarMessage.bind(null,'TAC正在下载')} href={tacUrl}/>
          </div>
          : <output className={'output'}/>}
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
  infoUrl:state.fetchReducer.infoUrl,
  tacUrl:state.fetchReducer.tacUrl,
  auth: state.fetchReducer.userInfo.level,
  //downloadStatus:state.fetchReducer.downloadStatus
});

const mapDispatchToProps = (dispatch)=>({
  snackbarMessage:(info)=>dispatch(snackbarMessage(info))
});

export default connect(mapStateToProps,mapDispatchToProps)(Download);
