import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {handleDrawer} from '../actions.js'
import Query from '../query/query.js';
import Add from '../add/add.js'
import update from '../update/update.js'

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

const Header = ({hDrawer, state}) =>(
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
          <NavLink to="/update"  style={styles.Link}>修改数据</NavLink>
        </MenuItem>
        <MenuItem onClick={hDrawer}>
          <NavLink to="/add"  style={styles.Link}>新增数据</NavLink>
        </MenuItem>
      </Drawer>
      <Route exact path="/" component={Query}/>
      <Route path='/update' component={update}/>
      <Route path="/add" component={Add}/>
    </header>
  </BrowserRouter>
);

Header.propTypes={
  hDrawer: PropTypes.func,
  state: PropTypes.object,
};

const mapStateToProps = (state) =>({
  state:state.reducerQuery
});

const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
});


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
