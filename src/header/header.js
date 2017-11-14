import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, NavLink, Switch,Redirect} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {handleDrawer} from '../actions.js'
import Query from '../query/query.js';
import Add from '../add/add.js';
import Manager from '../manager/manager.js';
import NoFound from '../noFound/noFound.js';
import Analyze from '../analyze/analyze';
import Delete from '../delete/delete';
import signIn from '../signIn/signIn.js'

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

class Header extends React.Component {

  render(){

    const {hDrawer, state, auth} = this.props;
    const Auth = ({component: Component, ...res}) =>(
      <Route {...res} render={props => (
        auth !== '' ? (
          <Component {...props}/>
        ):(
          <Redirect to='/signIn'/>
        )
      )} />
    );

    return(
      <BrowserRouter>
        <header>
          <AppBar
            title="终端信息库"
            iconElementRight={<IconButton iconClassName="material-icons">more</IconButton>}
            onLeftIconButtonTouchTap={hDrawer}
            style={styles.AppBar}
          />
          <Drawer
            open={state.drawer}
            docked={false}
            onRequestChange={hDrawer}
          >
            <AppBar
              iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
              onLeftIconButtonTouchTap={hDrawer}
              style={styles.AppBarDrawer}
            />
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
          </Drawer>
          <Switch>
            <Auth exact path="/" component={Query}/>
            <Auth path="/add" component={Add}/>
            <Auth path='/manager' component={Manager}/>
            <Auth path='/analyze' component={Analyze}/>
            <Auth path='/delete' component={Delete}/>
            <Route path='/signIn' component={signIn}/>
            <Auth component={NoFound}/>
          </Switch>
        </header>
      </BrowserRouter>
    )
  }

}




Header.propTypes={
  hDrawer: PropTypes.func,
  state: PropTypes.object,
};

const mapStateToProps = (state) =>({
  state: state.reducerQuery,
  auth: state.reducerFetch.auth,
});

const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
});


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
