import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
//import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router-dom';
import {signIn,handleUserName,handlePassWord,checkAuth} from '../fetchActions';
import './signIn.css'

const styles = {
  title:{
    marginLeft:'10%'
  },
  dialog:{
    marginTop:-50,
    width:1500,
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
    console.log('DidUpdate');
    if(this.props.auth !==0)this.props.history.push('/');
  }

  componentWillMount(){
    if(this.props.auth === '') this.props.checkAuth()
  }

  render(){
    const {signIn,handleUserName,handlePassWord} = this.props;

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
        <div className='loginInput'>
          <TextField
            className='text'
            fullWidth={true}
            hintText='用户名'
            onChange={handleUserName}
          />
          <TextField
            className='text'
            fullWidth={true}
            type='password'
            hintText='密码'
            onChange={handlePassWord}
          />
          <RaisedButton
            className='loginButton'
            label='登陆'
            fullWidth={true}
            primary={true}
            onClick={signIn}
          />
        </div>
      </Dialog>

    )
  }
}


SignIn.protoTypes = {
  auth:PropTypes.Number,
  signIn:PropTypes.func,
  handleUserName:PropTypes.func,
  handlePassWord:PropTypes.func,
  checkAuth:PropTypes.func,
};

const mapStateToProps =(state)=>({
  auth:state.reducerFetch.auth
});

const mapDispatchToProps = (dispatch)=>({
  signIn:()=>dispatch(signIn()),
  handleUserName:(event, value)=>dispatch(handleUserName(event, value)),
  handlePassWord:(event, value)=>dispatch(handlePassWord(event, value)),
  checkAuth:()=>dispatch(checkAuth()),
});


//redux包着的组件只能是这么复杂地包着。
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
