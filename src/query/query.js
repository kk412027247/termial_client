import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn} from 'material-ui/Table';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import ActionSearch from 'material-ui/svg-icons/action/search';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css';
import {handleDrawer, handleFetch, handleInput, handleSnackbar, handleDialog} from '../actions.js'
import ShowDetail from './showDetail.js'

const Query = ({hDrawer, hFetch, hInput, hSnackbar, hDialog, state }) =>(
  <div>
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
            {state.data.map((item,index)=>(
              <TableRow key={item["_id"]}>
                <TableRowColumn >{item['厂商']}</TableRowColumn>
                <TableRowColumn >{item[ "品牌(英文)"]}</TableRowColumn>
                <TableRowColumn >{item["价格"]}</TableRowColumn>
                <TableRowColumn >{item["上市时间"]}</TableRowColumn>
                <TableRowColumn >{item["SIM卡"]}</TableRowColumn>
                <TableRowColumn >{item["操作系统"]}</TableRowColumn>
                <TableRowColumn >{item["网络制式"]}</TableRowColumn>
                <TableRowColumn >{item["CPU数量"]}</TableRowColumn>
                <TableRowColumn >{item["ROM容量"]}</TableRowColumn>
                <TableRowColumn >{item["后置摄像头"]}</TableRowColumn>
                <TableRowColumn >{item["电池容量"]}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >
                <IconButton onClick={hDialog}>
                  <MoreHoriz/>
                </IconButton>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn >note 7</TableRowColumn>
              <TableRowColumn >2000-3000</TableRowColumn>
              <TableRowColumn >2015</TableRowColumn>
              <TableRowColumn >双卡双待</TableRowColumn>
              <TableRowColumn >android</TableRowColumn>
              <TableRowColumn >4g</TableRowColumn>
              <TableRowColumn >8</TableRowColumn>
              <TableRowColumn >128g</TableRowColumn>
              <TableRowColumn >2000</TableRowColumn>
              <TableRowColumn >10000</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <ShowDetail/>
        <LinearProgress/>
      </Paper>
      {state.input}
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
  hDialog: PropTypes.func,
};


const mapStateToProps = (state) => ({state:state.reducerQuery});



const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
  hFetch: () => dispatch(handleFetch()),
  hInput: (event, newValue) => dispatch(handleInput(event, newValue)),
  hSnackbar: () => dispatch(handleSnackbar()) ,
  hDialog: () => dispatch(handleDialog())

});


export default connect(mapStateToProps, mapDispatchToProps)(Query);
