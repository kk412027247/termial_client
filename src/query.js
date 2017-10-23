import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
//import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import ActionSearch from 'material-ui/svg-icons/action/search';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './main.css';
import {handleDrawer, handleFetch, handleInput, handleSnackbar} from './actions.js'


const Query = ({hDrawer, hFetch, hInput, hSnackbar, state}) =>(
  <div>
    <header>
      <AppBar
        title="终端信息库"
        iconElementRight={<IconButton iconClassName="material-icons">more</IconButton>}
        onLeftIconButtonTouchTap={hDrawer}
        style={{backgroundColor: '#1976D2', height: '70px',display: 'flex', alignItems: 'center'}}
      />
      <Drawer
        open={state.drawer}
        docked={false}
        onRequestChange={hDrawer}

      >
        <AppBar
          iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
          onLeftIconButtonTouchTap={hDrawer}
          style={{backgroundColor: '#1976D2'}}
        />
        <MenuItem><Link to="/" style={{display:'flex'}}>查询数据</Link></MenuItem>
        <MenuItem><Link to="/add" style={{display:'flex'}}>新增数据</Link></MenuItem>
        <MenuItem>新增数据</MenuItem>
        <MenuItem>删除数据</MenuItem>

      </Drawer>
    </header>

    <div id="main">
      <div className="searchInput">
        <Paper className="searchPaper">
          <TextField
            style={{display:'flex',flex: 0.8}}
            hintStyle={{fontSize: '25px'}}
            inputStyle={{fontSize: '25px'}}
            hintText='输入手机型号或品牌进行搜索，多个关键词请用空格隔开'
            underlineShow={false}
            onChange={hInput}
          />
          <IconButton
            label="搜索"
            onClick={hFetch}
          >
            <ActionSearch />
          </IconButton>

        </Paper>
      </div>
      <Divider/>
      <br/>
      <Paper className="show">
        <AppBar
          title="显示数据"
          style={{backgroundColor: '#00BCD4'}}
          iconElementLeft={<IconButton iconClassName="material-icons">language</IconButton>}
        />

        <Table multiSelectable={true} fixedHeader={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>厂商</TableHeaderColumn>
              <TableHeaderColumn>品牌</TableHeaderColumn>
              <TableHeaderColumn>价格</TableHeaderColumn>
              <TableHeaderColumn>上市时间</TableHeaderColumn>
              <TableHeaderColumn>双卡双待</TableHeaderColumn>
              <TableHeaderColumn>系统</TableHeaderColumn>
              <TableHeaderColumn>网络</TableHeaderColumn>
              <TableHeaderColumn>CSFB</TableHeaderColumn>
              <TableHeaderColumn>FR</TableHeaderColumn>
              <TableHeaderColumn>FR</TableHeaderColumn>
              <TableHeaderColumn>更多信息</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*{data.map((item,index)=>(*/}
              {/*<TableRow key={item["_id"]}>*/}
                {/*<TableRowColumn >{item['厂商']}</TableRowColumn>*/}
                {/*<TableRowColumn >{item[ "品牌(英文)"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["价格"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["上市时间"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["SIM卡"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["操作系统"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["网络制式"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["CPU数量"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["ROM容量"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["后置摄像头"]}</TableRowColumn>*/}
                {/*<TableRowColumn >{item["电池容量"]}</TableRowColumn>*/}
              {/*</TableRow>*/}
            {/*))}*/}
          </TableBody>
        </Table>

        <Dialog
          title="详细信息"
          actions={[<RaisedButton label="更改"/>,<RaisedButton label='再更改' style={{marginLeft: '30px'}}/>]}
          open={state.dialog}
          modal={false}
        >
          xxx <br/>  xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/>
        </Dialog>
        <LinearProgress/>
      </Paper>
    </div>
    <footer>
      <Snackbar
        open={state.snackbar}
        message={state.snackbarMessage}
        onRequestClose={hSnackbar}
      />
    </footer>
  </div>
);

Query.propTypes = {
  hDrawer: PropTypes.func,
  hFetch: PropTypes.func,
  hInput: PropTypes.func,
  snackbarMessage: PropTypes.string,
  input: PropTypes.string,
  drawer: PropTypes.bool,
  data: PropTypes.array,
  snackbar:  PropTypes.bool,
  hSnackbar: PropTypes.func,

};

const mapStateToProps = (state) => ({
  state:state.reducerQuery
});



const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
  hFetch: () => dispatch(handleFetch()),
  hInput: (event, newValue) => dispatch(handleInput(event, newValue)),
  hSnackbar: () => dispatch(handleSnackbar())

});


export default connect(mapStateToProps, mapDispatchToProps)(Query);
