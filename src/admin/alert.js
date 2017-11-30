import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {handleAlert, removeUser} from '../actions/adminActions';

class Alert extends React.Component {
  render(){
    const {alert , handleAlert, removeUser ,user} = this.props;
    const actions = [
      <FlatButton label={'确认删除'} primary={true} onClick={removeUser}/>,
      <FlatButton label={'取消'} secondary={true} onClick={handleAlert}/>
    ];

    return(
      <Dialog
        open={alert}
        actions={actions}
      >
        确认删除用户 <strong>{user.userName}</strong>吗？
      </Dialog>
    )
  }
}

Alert.propTypes = {
  alert:PropTypes.bool,
  handleAlert:PropTypes.func,
  removeUser:PropTypes.func,
  user:PropTypes.object,
};

const mapStateToProps = (state)=>({
  alert:state.adminReducer.alert,
  user:state.adminReducer.removeUser,
});

const mapDispatchToProps = (dispatch)=>({
  handleAlert:()=>dispatch(handleAlert()),
  removeUser:()=>dispatch(removeUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(Alert)

