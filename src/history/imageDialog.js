import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import {toggleImage} from '../actions/historyActions';
import {bindActionCreators} from 'redux';

const styles = {
  dialog:{
    textAlign:'center'
  },
  dialogContent:{
    width: '90%',
    maxWidth: 'none',
  }
};

const ImageDialog = ({url,openImage, toggleImage}) => (
  <div>
    <Dialog
      open={openImage}
      style={styles.dialog}
      onRequestClose={toggleImage}
      contentStyle={styles.dialogContent}
    >
      <img src={url} height="600" alt="" />
    </Dialog>
  </div>
);

const mapStatusToProps = state =>({
  url:state.historyReducer.url,
  openImage:state.historyReducer.openImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({toggleImage},dispatch);

export default connect(mapStatusToProps, mapDispatchToProps)(ImageDialog)
