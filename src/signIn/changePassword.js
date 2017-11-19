import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {handlePassWord, handleNewPassword, changePassword,handleChangePassword} from '../fetchActions'
import './signIn.css';


class ChangePassword extends React.Component{

  //todo 修改密码功能真心烦

  render(){
    const {username,handlePassWord,changePassword,changePasswordDialog,handleChangePassword,handleNewPassword} =this.props;
    const actions =[
      <FlatButton
        primary={true}
        label='提交修改'
        onClick={changePassword}
      />,
      <FlatButton
        label='取消'
        onClick={handleChangePassword}
      />,
    ];


    return(
      <div>
        <Dialog
          title='密码修改'
          open={changePasswordDialog}
          actions={actions}
          onRequestClose={handleChangePassword}
        >
          <form className='changePassWord'>
            <TextField
              floatingLabelText='用户名'
              value={username}
              id='username'
              disabled={true}
              fullWidth={true}
            />
            <TextField
              fullWidth={true}
              floatingLabelText='请输入原密码'
              type='password'
              id='password'
              onChange={handlePassWord}
            />
            <TextField
              fullWidth={true}
              floatingLabelText='请输入新密码'
              type='password'
              id='newPassword'
              onChange={handleNewPassword}
            />
          </form>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  username:state.reducerFetch.userInfo.userName,
  changePasswordDialog:state.reducerFetch.changePasswordDialog
});

const mapDispatchToProps =(dispatch)=>({
  handlePassWord:(event,value)=>dispatch(handlePassWord(event,value)),
  handleNewPassword:(event,value)=>dispatch(handleNewPassword(event,value)),
  changePassword:()=>dispatch(changePassword()),
  handleChangePassword:()=>dispatch(handleChangePassword())
});

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword)
