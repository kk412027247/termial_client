import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CloudDone from 'material-ui/svg-icons/file/cloud-done';
import CloudDownload from  'material-ui/svg-icons/file/cloud-download';
import Folder from 'material-ui/svg-icons/file/folder';
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

export default ({history})=> {
  if(history.status === 'saved'){
    return(
      <Paper className={'user_history'} >
        <div className={'history_saved'} >
          <ul>
            <li><CloudDone  style={styles.cloudDoneStyle}/>已保存</li>
            <li>品牌：{history['品牌1']}</li>
            <li>型号：{history['型号1']}</li>
            <li>TAC：{history.TAC}</li>
          </ul>
          <img
            onClick={()=>{console.log(1)}}
            src={`http://${host}:3001/${history.imagePath.replace(/public/,'')}`}
            alt="TAC"
            height="110px"/>
        </div>
      </Paper>
    )
  }else{
    return(
      <div>
        <Paper className={'user_history'}>
          <div className={'history_cache'} >
            <ul>
              <li><CloudDownload style={styles.cloudDownloadStyle}/>已缓存</li>
              <li>品牌：{history.cache['品牌1']}</li>
              <li>型号：{history.cache['型号1']}</li>
              <li>TAC：{history.cache.TAC}</li>
            </ul>
            <img src={`http://${host}:3001/${history.cache.imagePath.replace(/public/,'')}`} alt="TAC" height="110px"/>
            <div className={'history_button'}>
              <RaisedButton secondary={true} label={'存入新数据'}/>
            </div>
          </div>

          <div className={'history_origin'}>
            <ul>
              <li><Folder style={styles.folderStyle}/>原数据</li>
              <li>品牌：{history.origin['品牌1']}</li>
              <li>型号：{history.origin['型号1']}</li>
              <li>TAC：{history.origin.TAC}</li>
            </ul>
            <img src={`http://${host}:3001/${history.origin.imagePath.replace(/public/,'')}`} alt="TAC" height="110px"/>
            <div className={'history_button'}>
              <RaisedButton primary={true} label={'保留原数据'}/>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
};
