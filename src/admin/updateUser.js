import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {getUserList,prepareToUpdate, prepareRemoveUser} from '../actions/adminActions'
import './admin.css';

class UpdateUser extends React.Component {

  componentDidMount(){
    this.props.getUserList();
  }

  render(){
    const{userList, prepareToUpdate, prepareRemoveUser} = this.props;
    return(
      <Paper className={'paper'}>
        <h2>管理用户</h2>
        {userList.map(user=>(
          <div className={'paper2'} key={user._id}>
            <section className={'updateUser'}>
              <form className={'input'}>
                <TextField
                  floatingLabelText='用户名'
                  value={user.userName}
                  underlineShow={false}
                />
                <TextField
                  floatingLabelText='密码'
                  value={user.passWord}
                  type={'password'}
                  underlineShow={false}
                />
                <div className={'auth'}>
                  <DropDownMenu value={user.level} disabled={true} >
                    <MenuItem value={1} primaryText={`权限等级: 1`}/>
                    <MenuItem value={2} primaryText={'权限等级: 2'}/>
                    <MenuItem value={3} primaryText={'权限等级: 3'}/>
                  </DropDownMenu>
                </div>
                {/*因为flex会对material-ui造成布局影响，所以外包了一层div，防止flex属性传递*/}
                <div className={'submit'}>
                  <RaisedButton
                    label={'修改'}
                    primary={true}
                    onClick={prepareToUpdate.bind(null,user._id)}
                  />
                </div>
              </form>
            </section>
            <div className={'remove'}>
              <RaisedButton
                label={'删除'}
                secondary={true}
                onClick={prepareRemoveUser.bind(null,user._id)}
              />
            </div>
          </div>
        ))}
      </Paper>
    )
  }
}

UpdateUser.propTypes = {
  userList:PropTypes.array,
  getUserList:PropTypes.func,
  prepareToUpdate:PropTypes.func,
  prepareRemoveUser:PropTypes.func,
};

const mapStateToProps = (state)=>({
  userList:state.adminReducer.userList,
});

const mapDispatchToProps = (dispatch)=>({
  getUserList:()=>dispatch(getUserList()),
  prepareToUpdate:(_id)=>dispatch(prepareToUpdate(_id)),
  prepareRemoveUser:(_id)=>dispatch(prepareRemoveUser(_id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser)

