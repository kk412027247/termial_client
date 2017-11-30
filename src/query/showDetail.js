import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {fetchDialog, updateDetail} from "../actions/fetchActions";
import DetailItem from './detailItem';

const styles = {
  update:{
    marginRight: '64%',
  },
  link:{
    display:'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  dialogContent:{
    width: '1263px',
    maxWidth:'none'
  },
  title:{
    marginLeft:'14%',
  },
  underLine:{
    borderColor: '#FFF'
  }
};

class ShowDetail extends React.Component{

  render(){
    const {dialog,fetchDialog,updateDetail,detail, auth} = this.props;

    const  actions= auth > 1 ? [
      <RaisedButton
        primary={true}
        style={styles.update}
        label="修改"
        onClick={updateDetail}
      />,                             
      <FlatButton
        label='取消'
        onClick={fetchDialog}
      />
    ]:[
      <FlatButton
        label='取消'
        onClick={fetchDialog}
      />
    ];

    return(
      <Dialog
        title={`${detail['厂商(中文)']} ${detail['型号']} 详细信息`}
        titleStyle={styles.title}
        autoScrollBodyContent={true}
        contentStyle={styles.dialogContent}
        onRequestClose={fetchDialog}
        actions={actions}
        //open={true}
        open={dialog}
        modal={false}
      >
        <br/>
       <DetailItem/>
      </Dialog>
    )
  }
}

ShowDetail.propTypes = {
  fetchDialog:PropTypes.func,
  updateDetail:PropTypes.func,
  dialog:PropTypes.bool,
  detail:PropTypes.object,
  auth:PropTypes.number,
};

const mapStateToProps = (state) =>({
  dialog: state.fetchReducer.dialog,
  detail: state.fetchReducer.detail,
  auth: state.fetchReducer.userInfo.level,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDialog: () => dispatch(fetchDialog()),
  updateDetail: ()=> dispatch(updateDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
