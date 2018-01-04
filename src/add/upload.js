import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import CreateNewFile from 'material-ui/svg-icons/file/create-new-folder';
import './spider.css';
import {uploadFile} from '../actions/addActions';
import host from '../host.js';

const IconStyle = {
  width:150,
  height:150,
};

class Upload extends React.Component{
  render(){
    const {uploadFile} = this.props;
    return(
      <Paper id={'spiderPaper'}>
        <div id={'fileUpload'}>
          <input onChange={uploadFile} id={'fileUploadInput'} type={'file'} accept={'.xlsx, .xls'} />
          <CreateNewFile id={'fileUploadButton'} color={'#2196F3'} style={IconStyle}/>
          <div className={'text'}>上传TAC文件</div>
        </div>
        <FlatButton
          className={'downloadButton'}
          label={'下载文件模版'}
          secondary={true}
          href={`http://${host}:3001/downloadTemplate`}
        />
      </Paper>
    )
  }
}

Upload.propTypes = {
  uploadFile:PropTypes.func,
};


const mapStateToProps = ()=>({});

const mapDispatchToProps = (dispatch)=>({
  uploadFile:(event)=>dispatch(uploadFile(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
