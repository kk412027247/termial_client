import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, NavLink, Switch,Redirect} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
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
import UpdateHistory from '../history/history';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {signOut,handleChangePassword} from '../actions/fetchActions';
import {handleDrawer} from '../actions/actions';
import {ConnectedRouter} from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory';
import ChangePassword from '../signIn/changePassword'

import {history} from "../store";

const styles={
  AppBar:{
    backgroundColor: '#1976D2',
    height: '70px',
    display: 'flex',
    alignItems: 'center'
  },
  AppBarDrawer:{
    backgroundColor: '#1976D2',
  },
  Link:{
    display:'flex'
  },
 
};


class Body extends React.Component {
  // shouldComponentUpdate(nextProps){
  //   console.log('nextProps',nextProps.location);
  //   console.log('this.props',this.props.location);
  //   return (nextProps !== this.props)
  // }

  // componentDidMount(){
  //   console.log(navigator.userAgent);
  // }
  //
  // componentDidUpdate(){
  //   console.log('Body Component did update');
  // }



  render(){

    const {hDrawer, drawer, auth,userName,signOut, handleChangePassword} = this.props;
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
            <Drawer
              open={drawer}
              docked={false}
              onRequestChange={hDrawer}
            >
              <AppBar
                iconElementLeft={<IconButton><ArrowBack/></IconButton>}
                onLeftIconButtonTouchTap={hDrawer}
                style={styles.AppBarDrawer}
              />
              <nav>
                <MenuItem onClick={hDrawer}>
                  <NavLink exact to="/"  style={styles.Link}>数据查询</NavLink>
                </MenuItem>
                { auth>=3
                  ? <MenuItem onClick={hDrawer}>
                    <NavLink to="/add"  style={styles.Link}>数据新增</NavLink>
                  </MenuItem>
                  : ''
                }
                { auth>=4
                  ?  <MenuItem onClick={hDrawer}>
                    <NavLink to="/admin"  style={styles.Link}>用户管理</NavLink>
                  </MenuItem>
                  : ''
                }
                { auth>=1
                  ?  <MenuItem onClick={hDrawer}>
                    <NavLink to="/history"  style={styles.Link}>App历史日志</NavLink>
                  </MenuItem>
                  : ''
                }
                {/*<MenuItem onClick={hDrawer}>*/}
                  {/*<NavLink to="/analyze"  style={styles.Link}>数据分析</NavLink>*/}
                {/*</MenuItem>*/}
                {/*{auth>=3*/}
                  {/*?<MenuItem onClick={hDrawer}>*/}
                    {/*<NavLink to="/delete"  style={styles.Link}>数据删除</NavLink>*/}
                  {/*</MenuItem>*/}
                  {/*: ''*/}
                {/*}*/}

              </nav>
            </Drawer>
          </header>
          <main>
            <ChangePassword/>
            <Switch>
              <Auth exact path="/" component={Query}/>
              {auth>=3?<Auth path="/add" component={Add}/>:''}
              {auth>=4?<Auth path='/admin' component={Admin}/>:''}
              {auth>=1?<Auth path='/history' component={UpdateHistory}/>:''}
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
  hDrawer: PropTypes.func,
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
  hDrawer: () => dispatch(handleDrawer()),
  signOut: () => dispatch(signOut()),
  handleChangePassword:()=>dispatch(handleChangePassword()),
  //link:()=>dispatch(push('/somewhere'))

});


export default  connect(mapStateToProps, mapDispatchToProps)(Body);
