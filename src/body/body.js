import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Switch,Redirect} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Footer from '../footer/footer';
import Query from '../query/query.js';
import Add from '../add/add.js';
import Admin from '../admin/admin';
import NoFound from '../noFound/noFound';
import Analyze from '../analyze/analyze';
import Delete from '../delete/delete';
import SignIn from '../signIn/signIn'
import History from '../history/history';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {signOut,handleChangePassword} from '../actions/fetchActions';
import {ConnectedRouter} from 'react-router-redux';
import ChangePassword from '../signIn/changePassword'
import {toggleFirstFetchState,handleHistory} from '../actions/historyActions';
import {history} from "../store";
import Sidebar from './sidebar';

const styles={
  AppBar:{
    backgroundColor: '#1976D2',
    height: '70px',
    display: 'flex',
    alignItems: 'center'
  }
};


class Body extends React.Component {
  
  render(){

    const {hDrawer, auth,userName,signOut, handleChangePassword} = this.props;
    const position = {
      targetOrigin:{horizontal:'right',vertical:'top'},
      anchorOrigin:{horizontal:'right',vertical:'top'}
    };

    const Auth = ({component: Component, ...res}) =>(
      <Route {...res} render={props => (
        (auth >=1 &&  auth <=4 ) ?
          (<Component {...props}/>) :
          (<Redirect to={{
            pathname:'/signIn'
          }}/>
        )
      )} />
    );

    const doNothing = ()=>{};
    return(
      <ConnectedRouter history={history} >
        <div id='body'>
          <header>
            <AppBar
              title="终端信息库"
              iconElementLeft={auth>=2 ? <IconButton><Menu/></IconButton> : <div/>}
              iconElementRight={
                <IconMenu
                  iconButtonElement={ <IconButton><PermIdentity/></IconButton>}
                  targetOrigin={position.targetOrigin}
                  anchorOrigin={position.anchorOrigin}
                >
                  <MenuItem>用户名：<b>{userName}</b></MenuItem>
                  <MenuItem onClick={handleChangePassword}>修改密码</MenuItem>
                  <MenuItem onClick={signOut} >退出</MenuItem>
                </IconMenu>
              }
              onLeftIconButtonTouchTap={auth>=2?hDrawer:doNothing}
              style={styles.AppBar}
            />
            <Sidebar/>
          </header>
          <main>
            <ChangePassword/>
            <Switch>
              <Auth exact path="/" component={Query}/>
              {auth>=3?<Auth path="/add" component={Add}/>:''}
              {auth>=4?<Auth path='/admin' component={Admin}/>:''}
              {auth>=1?<Auth path='/history' component={History}/>:''}
              <Auth path='/analyze' component={Analyze}/>
              {auth>=3?<Auth path='/delete' component={Delete}/>:''}
              <Route path='/signIn' component={SignIn}/>
              <Auth component={NoFound}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </ConnectedRouter>
    )
  }

}

Body.propTypes={
  signOut: PropTypes.func,
  state: PropTypes.object,
  handleChangePassword: PropTypes.func,
  checkAuth:PropTypes.func,
};

//detail的出现，只是为了在爬虫页面，装在完毕之后重载入页面，试试改改spiderStatus
const mapStateToProps = (state) =>({
  drawer: state.generalReducer.drawer,
  auth: state.fetchReducer.userInfo.level,
  userName:state.fetchReducer.userInfo.userName,
  spiderStatus:state.fetchReducer.spiderStatus,
  //detail: state.fetchReducer.detail,
});

const mapDispatchToProps = (dispatch) =>({
  signOut: () => {
    dispatch(signOut());
    dispatch(toggleFirstFetchState(true));
    dispatch(handleHistory([]));
  },
  handleChangePassword:()=>dispatch(handleChangePassword()),
});


export default  connect(mapStateToProps, mapDispatchToProps)(Body);
