import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {addUserName, addUserPassWord, addUserAuth, addUser} from '../actions/adminActions'
import './admin.css';

// todo 用户名，密码安全性、复杂程度检测，以后再做。
class AddUser extends React.Component {
  render(){
    const {addUserName, addUserPassWord, addUserAuth, userAuth, addUser} = this.props;
    return(
      <Paper className={'paper'}>
        <h2>新增用户</h2>
        <section className={'addUser'}>
          <form className={'input'}>
            <TextField
              floatingLabelText='用户名'
              //errorText={'用户名重复'}
              onChange={addUserName}
            />
            <TextField
              //errorText={'密码不能少于6位，且必须包含数字与字符'}
              floatingLabelText='密码'
              type={'password'}
              onChange={addUserPassWord}
            />
            <div className={'auth'}>
              <DropDownMenu value={userAuth} onChange={addUserAuth}>
                <MenuItem value={1} primaryText={'权限等级: 1'}/>
                <MenuItem value={2} primaryText={'权限等级: 2'}/>
                <MenuItem value={3} primaryText={'权限等级: 3'}/>
              </DropDownMenu>
            </div>
            {/*因为flex会对material-ui造成布局影响，所以外包了一层div，防止flex属性传递*/}
            <div className={'submit'}>
              <RaisedButton
                label={'新增'}
                primary={true}
                onClick={addUser}
              />
            </div>
          </form>
        </section>
      </Paper>
    )
  }
}

AddUser.propTypes = {
  userAuth:PropTypes.number,
  addUserName:PropTypes.func,
  addUserPassWord:PropTypes.func,
  addUserAuth:PropTypes.func,
  addUser:PropTypes.func,
};

const mapStateToProps = (state)=>({
  userAuth:state.adminReducer.addUserAuth,
});

const mapDispatchToProps = (dispatch)=>({
  addUserName:(event, newValue)=>dispatch(addUserName(newValue)),
  addUserPassWord:(event, newValue)=>dispatch(addUserPassWord(newValue)),
  addUserAuth:(event, index , value)=>dispatch(addUserAuth(value)),
  addUser:()=>dispatch(addUser()),
});

export default connect(mapStateToProps,mapDispatchToProps)(AddUser)

