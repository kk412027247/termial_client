import React from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {handleDrawer} from '../actions/actions';
import PropTypes from "prop-types";

const styles={
  AppBarDrawer:{
    backgroundColor: '#1976D2',
  },
  Link:{
    display:'flex'
  }
};

const Sidebar = ({auth,drawer,handleDrawer}) => (
  <Drawer
    open={drawer}
    docked={false}
    onRequestChange={handleDrawer}
  >
    <AppBar
      iconElementLeft={<IconButton><ArrowBack/></IconButton>}
      onLeftIconButtonTouchTap={handleDrawer}
      style={styles.AppBarDrawer}
    />
    <nav>
      <MenuItem onClick={handleDrawer}>
        <NavLink exact to="/"  style={styles.Link}>数据查询</NavLink>
      </MenuItem>
      { auth>=3
        ? <MenuItem onClick={handleDrawer}>
          <NavLink to="/add"  style={styles.Link}>数据新增</NavLink>
        </MenuItem>
        : ''
      }
      { auth>=4
        ?  <MenuItem onClick={handleDrawer}>
          <NavLink to="/admin"  style={styles.Link}>用户管理</NavLink>
        </MenuItem>
        : ''
      }
      { auth>=1
        ?  <MenuItem onClick={handleDrawer}>
          <NavLink to="/history"  style={styles.Link}>App历史日志</NavLink>
        </MenuItem>
        : ''
      }
    </nav>
  </Drawer>
);

Sidebar.propTypes={
  handleDrawer: PropTypes.func,
  drawer: PropTypes.bool,
  auth: PropTypes.number,
};

const mapStateToProps = state => ({
  drawer: state.generalReducer.drawer,
  auth: state.fetchReducer.userInfo.level,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleDrawer
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
