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
import Manager from '../manager/manager';
import NoFound from '../noFound/noFound';
import Analyze from '../analyze/analyze';
import Delete from '../delete/delete';
import SignIn from '../signIn/signIn'
import PermIdentity from 'material-ui/svg-icons/action/perm-identity' ;
import {signOut} from '../fetchActions';
import {handleDrawer} from '../actions';


import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

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


  // componentDidUpdate(){
  //   //console.log('DidUpdate');
  //   if(this.props.auth===-1){console.log('你已经退出了，请关闭页面')}
  // }

  render(){

    const {hDrawer, drawer, auth,userName,signOut, } = this.props;
    const position = {
      targetOrigin:{horizontal:'right',vertical:'top'},
      anchorOrigin:{horizontal:'right',vertical:'top'}
    };

    const Auth = ({component: Component, ...res}) =>(
      <Route {...res} render={props => (
        (auth >=1 &&  auth <=3 ) ? (
          <Component {...props}/>
        ):(
          <Redirect to={{
            pathname:'/signIn'
          }}/>
        )
      )} />
    );
    

    return(
      <ConnectedRouter history={history} >
        <div id='body'>
          <header>
            <AppBar
              title="终端信息库"
              iconElementRight={
                <IconMenu
                  iconButtonElement={ <IconButton><PermIdentity/></IconButton>}
                  targetOrigin={position.targetOrigin}
                  anchorOrigin={position.anchorOrigin}
                >
                  <MenuItem>用户名：<b>{userName}</b></MenuItem>
                  <MenuItem onClick={signOut} >退出</MenuItem>
                </IconMenu>
              }
              onLeftIconButtonTouchTap={hDrawer}
              style={styles.AppBar}
            />
            {/*<button onClick={link}>123</button>*/}
            <Drawer
              open={drawer}
              docked={false}
              onRequestChange={hDrawer}
            >
              <AppBar
                iconElementLeft={
                  <IconButton
                    iconClassName="material-icons"
                  >
                    arrow_back
                  </IconButton>
                }
                onLeftIconButtonTouchTap={hDrawer}
                style={styles.AppBarDrawer}
              />
              <nav>
                <MenuItem onClick={hDrawer}>
                  <NavLink exact to="/"  style={styles.Link}>查询数据</NavLink>
                </MenuItem>
                <MenuItem onClick={hDrawer}>
                  <NavLink to="/add"  style={styles.Link}>新增数据</NavLink>
                </MenuItem>
                <MenuItem onClick={hDrawer}>
                  <NavLink to="/manager"  style={styles.Link}>用户管理</NavLink>
                </MenuItem>
                <MenuItem onClick={hDrawer}>
                  <NavLink to="/analyze"  style={styles.Link}>数据分析</NavLink>
                </MenuItem>
                <MenuItem onClick={hDrawer}>
                  <NavLink to="/delete"  style={styles.Link}>数据删除</NavLink>
                </MenuItem>
            </nav>
            </Drawer>
          </header>
          <main>
            <Switch>
              <Auth exact path="/" component={Query}/>
              <Auth path="/add" component={Add}/>
              <Auth path='/manager' component={Manager}/>
              <Auth path='/analyze' component={Analyze}/>
              <Auth path='/delete' component={Delete}/>
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
};

const mapStateToProps = (state) =>({
  drawer: state.reducerQuery.drawer,
  auth: state.reducerFetch.auth,
  userName:state.reducerFetch.userName,
  //location:state.router.location
});

const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
  signOut: () => dispatch(signOut()),
  //link:()=>dispatch(push('/somewhere'))

});


export default  connect(mapStateToProps, mapDispatchToProps)(Body);
