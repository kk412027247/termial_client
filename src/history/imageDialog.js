import React from 'react';
import PropTypes from 'prop-types';
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
      <img src={url} height="600" alt="" onClick={toggleImage}/>
    </Dialog>
  </div>
);

ImageDialog.propTypes = {
  url:PropTypes.string,
  openImage:PropTypes.bool,
  toggleImage:PropTypes.func,
};

const mapStatusToProps = state =>({
  url:state.historyReducer.url,
  openImage:state.historyReducer.openImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({toggleImage},dispatch);

export default connect(mapStatusToProps, mapDispatchToProps)(ImageDialog)
