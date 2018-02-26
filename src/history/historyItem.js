import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CloudDone from 'material-ui/svg-icons/file/cloud-done';
import CloudDownload from  'material-ui/svg-icons/file/cloud-download';
import Folder from 'material-ui/svg-icons/file/folder';
import {handleImage,toggleImage,updateHistoryByPC} from '../actions/historyActions';
import host from '../host'
import './historyItem.css';

const styles = {
  cloudDoneStyle:{
    color:'#4caf50',marginRight:25
  },
  cloudDownloadStyle:{
    color:'#e91e63',marginRight:25
  },
  folderStyle:{
    color:'#2196f3',marginRight:25
  }
};

const HistoryItem = ({history,handleImage,savedUrl,cacheUrl,originUrl,updateHistoryByPC})=> {
  if(history.status === 'saved'){
    return(
      <div className={'history_container'}>
        <Paper className={'user_history'} >
          <div className={'history_saved'} >
            <ul>
              <li><CloudDone  style={styles.cloudDoneStyle}/>已保存</li>
              <li>品牌：{history['品牌1']}</li>
              <li>型号：{history['型号1']}</li>
              <li>TAC：{history.TAC}</li>
            </ul>

            {
              savedUrl !== ''?
              <img
                onClick={handleImage.bind(null,savedUrl)}
                src={savedUrl}
                alt="TAC"
                height="110px"
              /> :
              <div/>
            }
          </div>
        </Paper>
      </div>
    )
  }else{
    return(
      <div className={'history_container'}>
        <Paper className={'user_history'}>
          <div className={'history_cache'} >
            <ul>
              <li><CloudDownload style={styles.cloudDownloadStyle}/>已缓存</li>
              <li>品牌：{history.cache['品牌1']}</li>
              <li>型号：{history.cache['型号1']}</li>
              <li>TAC：{history.cache.TAC}</li>
            </ul>
            {
              cacheUrl !== '' ?
              <img
                onClick={handleImage.bind(null,cacheUrl)}
                src={cacheUrl}
                alt="TAC"
                height="110px"
              /> :
              <div/>
            }
            <div className={'history_button'}>
              <RaisedButton
                onClick={updateHistoryByPC.bind(null,{status:'saved',TAC:history.cache.TAC})}
                secondary={true}
                label={'存入新数据'}
              />
            </div>
          </div>

          <div className={'history_origin'}>
            <ul>
              <li><Folder style={styles.folderStyle}/>原数据</li>
              <li>品牌：{history.origin['品牌1']}</li>
              <li>型号：{history.origin['型号1']}</li>
              <li>TAC：{history.origin.TAC}</li>
            </ul>
            {
              originUrl !== ''?
              <img
                onClick={handleImage.bind(null,originUrl)}
                src={originUrl}
                alt="TAC"
                height="110px"
              />:
              <div/>
            }

            <div className={'history_button'}>
              <RaisedButton
                onClick={updateHistoryByPC.bind(null,{status:'origin',TAC:history.origin.TAC})}
                primary={true}
                label={'保留原数据'}
              />
            </div>
          </div>
        </Paper>
      </div>
    )
  }
};



HistoryItem.proptypes = {
  handleImage:PropTypes.func,
  savedUrl: PropTypes.string,
  cacheUrl: PropTypes.string,
  originUrl: PropTypes.string,
  updateHistoryByPC: PropTypes.func,
};

const mapStateToProps = (state, ownProps) =>{
  let savedUrl,cacheUrl,originUrl;
  if(ownProps.history.status === 'saved'){
    savedUrl = ownProps.history.imagePath ?
      `http://${host}:3001/${ownProps.history.imagePath.replace(/public/,'')}`:'';
  }else{
    cacheUrl = ownProps.history.cache.imagePath ?
      `http://${host}:3001/${ownProps.history.cache.imagePath.replace(/public/,'')}` : '';
    originUrl  = ownProps.history.origin.imagePath ?
      `http://${host}:3001/${ownProps.history.origin.imagePath.replace(/public/,'')}`:'';
  }
  return {
    savedUrl,cacheUrl,originUrl
  }};

const mapDispatchToProps = dispatch => ({
  handleImage:(url)=>{
    dispatch(handleImage(url));
    dispatch(toggleImage());
  },
  updateHistoryByPC:(updateInfo)=>dispatch(updateHistoryByPC(updateInfo)),
});



export default connect(mapStateToProps,mapDispatchToProps)(HistoryItem)
