import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router-dom';
import {signIn,handleUserName,handlePassWord,checkAuth,pressEnter} from '../actions/fetchActions';
import './signIn.css'

const styles = {
  title:{
    marginLeft:'10%'
  },
  dialog:{
    marginTop:-200,
    width:700,
    position:'relate'
  }
};

class SignIn extends React.Component {

  shouldComponentUpdate(nextProps){
    //console.log('shouldUpdate');
    return(this.props.auth !== nextProps.auth)
  }

  //更新完之后，页面跳转到主页
  componentDidUpdate(){
    //console.log('signInComponentDidUpdate');
    if(this.props.auth !==0){
      const path = (this.props.path === '/signIn'|| this.props.path ==='/signin') ? '/' : this.props.path;
      this.props.history.push(path)
    }
  }

  componentWillMount(){
    if(this.props.auth === undefined) this.props.checkAuth()
  }

  render(){
    const {signIn,handleUserName,handlePassWord,pressEnter} = this.props;

    return(
      <Dialog
        style={styles.dialog}
        open={true}
        className='signIn'>
        <AppBar
          iconElementLeft={<div/>}
          titleStyle={styles.title}
          title='用户登陆'
        />
        <form className='loginInput'>
          <TextField
            className='text'
            fullWidth={true}
            hintText='用户名'
            onChange={handleUserName}
            onKeyDown={pressEnter}
          />
          <TextField
            className='text'
            fullWidth={true}
            type='password'
            hintText='密码'
            onChange={handlePassWord}
            onKeyDown={pressEnter}
          />
          <RaisedButton
            className='loginButton'
            label='登陆'
            fullWidth={true}
            primary={true}
            onClick={signIn}
          />
        </form>
      </Dialog>

    )
  }
}

SignIn.protoTypes = {
  auth:PropTypes.number,
  signIn:PropTypes.func,
  handleUserName:PropTypes.func,
  handlePassWord:PropTypes.func,
  checkAuth:PropTypes.func,
  pressEnter:PropTypes.func,
  path:PropTypes.string,
};

const mapStateToProps =(state)=>({
  auth:state.fetchReducer.userInfo.level,
  path:state.routerReducer.location.pathname,
});

const mapDispatchToProps = (dispatch)=>({
  signIn:()=>dispatch(signIn()),
  handleUserName:(event, value)=>dispatch(handleUserName(event, value)),
  handlePassWord:(event, value)=>dispatch(handlePassWord(event, value)),
  checkAuth:()=>dispatch(checkAuth()),
  pressEnter:(event)=>dispatch(pressEnter(event)),
});

// redux包着的组件只能是这么复杂地包着。
// 用withRouter包了一层之后，dumb component就可以用history.push的方式操作了
// 因为把prop 全部传到了 内层，是的，这个高级组件包了两层
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
