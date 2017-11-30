import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {updateUser, handleUpdateUserDialog, updateUserAuth, resetUserPassWord} from '../actions/adminActions'


class UpdateUserItem extends React.Component {
  render(){
    const {updateUser, handleUpdateUserDialog, info, dialog, auth ,updateUserAuth, resetUserPassWord} = this.props;
    const actions = [
      <FlatButton label={'提交修改'} primary={true} onClick={updateUser}/>,
      <FlatButton label={'取消'} secondary={true} onClick={handleUpdateUserDialog}/>
    ];
    return(
      <Dialog
        open={dialog}
        actions={actions}
      >
        <form className={'updateUserItem'}>
          <TextField
            floatingLabelText='用户名'
            value={info.userName}
            id='username'
            disabled={true}
            fullWidth={true}
          />
          <TextField
            fullWidth={true}
            defaultValue={info.passWord}
            floatingLabelText='密码'
            type='password'
            id='newPassword'
            onChange={resetUserPassWord}
          />
          <DropDownMenu value={auth === 0 ? info.level : auth} onChange={updateUserAuth}>
            <MenuItem value={1} primaryText={`权限等级: 1`}/>
            <MenuItem value={2} primaryText={'权限等级: 2'}/>
            <MenuItem value={3} primaryText={'权限等级: 3'}/>
          </DropDownMenu>
        </form>
      </Dialog>
    )
  }
}

UpdateUserItem.propTypes={
  dialog:PropTypes.bool,
  info:PropTypes.object,
  auth:PropTypes.number,
  updateUser:PropTypes.func,
  handleUpdateUserDialog:PropTypes.func,
  updateUserAuth:PropTypes.func,
  resetUserPassWord:PropTypes.func,
};

const mapStateToProps = (state) =>({
  dialog:state.adminReducer.updateUserDialog,
  info:state.adminReducer.updateInfo,
  auth:state.adminReducer.updateUserAuth,
});

const mapDispatchToProps = (dispatch) =>({
  updateUser:()=>dispatch(updateUser()),
  handleUpdateUserDialog:()=>dispatch(handleUpdateUserDialog()),
  updateUserAuth:(event,index, value)=>dispatch(updateUserAuth(value)),
  resetUserPassWord:(event, newValue)=>dispatch(resetUserPassWord(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserItem)
