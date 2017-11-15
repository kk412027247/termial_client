import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
//import RaisedButton from 'material-ui/RaisedButton';
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
import {handleDrawer, handleFetch, handleInput,  handleDialog} from '../actions.js'
import {fetchData, searchData, showDetail,handleSnackbar} from '../actionsFetch.js'
import ShowDetail from './showDetail.js'

import {push} from 'react-router-redux';

const styles= {
  button:{
    display: 'flex',
    flex: 1,
  },
  search:{
    display:'flex',
    flex: 0.8
  },
  hint:{
    fontSize: '25px'
  },
  input:{
    fontSize: '25px'
  },
  iconButton:{
    marginTop: -7
  },
  icon:{
    width: 38,
    height: 38,
  },
  tradMark:{
    width:'100px'
  },
  appearTime:{
    width:'80px'
  },
  system:{
    width:'50px'
  }
};

const Query = ({hDrawer, hFetch, hInput, hSnackbar, hDialog, state ,fData,stateFetch, sData, sDetail,link}) =>(
  <div>
    <div id="main">
      <div className="searchInput">
        <Paper className="searchPaper">
          <TextField
            style={styles.search}
            hintStyle={styles.hint}
            inputStyle={styles.input}
            hintText='输入手机型号或品牌进行搜索，多个关键词请用空格隔开'
            underlineShow={false}
            onChange={fData}
          />
          <IconButton
            style={styles.iconButton}
            iconStyle={styles.icon}
            label="搜索"
            onClick={sData}
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
         <button onClick={link}>12</button>
        <Table multiSelectable={true} fixedHeader={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>厂商</TableHeaderColumn>
              <TableHeaderColumn style={styles.tradMark}>品牌</TableHeaderColumn>
              <TableHeaderColumn  >价格</TableHeaderColumn>
              <TableHeaderColumn style={styles.appearTime}>上市时间</TableHeaderColumn>
              <TableHeaderColumn>双卡双待</TableHeaderColumn>
              <TableHeaderColumn style={styles.system}>系统</TableHeaderColumn>
              <TableHeaderColumn>网络</TableHeaderColumn>
              <TableHeaderColumn>WIFI</TableHeaderColumn>
              <TableHeaderColumn>智能机</TableHeaderColumn>
              <TableHeaderColumn>单卡双待</TableHeaderColumn>
              <TableHeaderColumn>VOLTE</TableHeaderColumn>
              <TableHeaderColumn>CSFB</TableHeaderColumn>
              <TableHeaderColumn>更多</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stateFetch.result.map((item,index)=>(
              <TableRow key={item["_id"]}>
                <TableRowColumn >{item['厂商(中文)']}</TableRowColumn>
                <TableRowColumn style={styles.tradMark}>{item[ "品牌(英文)"]}</TableRowColumn>
                <TableRowColumn >{item["市场价格"]}</TableRowColumn>
                <TableRowColumn style={styles.appearTime}>{item["上市时间"]}</TableRowColumn>
                <TableRowColumn >{item["是否支持双卡双待"]}</TableRowColumn>
                <TableRowColumn style={styles.system}>{item["操作系统"]}</TableRowColumn>
                <TableRowColumn >{item["网络制式"]}</TableRowColumn>
                <TableRowColumn >{item["WIFI"]?1:0}</TableRowColumn>
                <TableRowColumn >{item["是否智能机"]}</TableRowColumn>
                <TableRowColumn >{item["LTE设备是否支持单卡双待"]}</TableRowColumn>
                <TableRowColumn >{item["是否支持VOLTE"]}</TableRowColumn>
                <TableRowColumn >{item["LTE设备是否支持CSFB"]}</TableRowColumn>
                <TableRowColumn >
                  <IconButton
                    onClick={sDetail.bind(null,item["_id"])}
                    style={styles.button}
                  >
                    <MoreHoriz/>
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn style={{width:'100px'}} >GALAXY Note 8</TableRowColumn>
              <TableRowColumn style={{width:'80px'}}>2000-3000</TableRowColumn>
              <TableRowColumn style={{width:'80px'}}>2015</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn style={{width:'50px'}}>android</TableRowColumn>
              <TableRowColumn >12345</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >
                <IconButton onClick={sData} style={styles.button}>
                  <MoreHoriz/>
                </IconButton>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn >三星</TableRowColumn>
              <TableRowColumn style={{width:'100px'}} >GALAXY Note 8</TableRowColumn>
              <TableRowColumn style={{width:'80px'}}>2000-3000</TableRowColumn>
              <TableRowColumn style={{width:'80px'}}>2015</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn style={{width:'50px'}}>android</TableRowColumn>
              <TableRowColumn >12345</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >1</TableRowColumn>
              <TableRowColumn >
                <IconButton onClick={sData} style={styles.button}>
                  <MoreHoriz/>
                </IconButton>
              </TableRowColumn>
            </TableRow> <TableRow>
            <TableRowColumn >三星</TableRowColumn>
            <TableRowColumn style={{width:'100px'}} >GALAXY Note 8</TableRowColumn>
            <TableRowColumn style={{width:'80px'}}>2000-3000</TableRowColumn>
            <TableRowColumn style={{width:'80px'}}>2015</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn style={{width:'50px'}}>android</TableRowColumn>
            <TableRowColumn >12345</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >
              <IconButton onClick={sData} style={styles.button}>
                <MoreHoriz/>
              </IconButton>
            </TableRowColumn>
          </TableRow> <TableRow>
            <TableRowColumn >三星</TableRowColumn>
            <TableRowColumn style={{width:'100px'}} >GALAXY Note 8</TableRowColumn>
            <TableRowColumn style={{width:'80px'}}>2000-3000</TableRowColumn>
            <TableRowColumn style={{width:'80px'}}>2015</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn style={{width:'50px'}}>android</TableRowColumn>
            <TableRowColumn >12345</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >1</TableRowColumn>
            <TableRowColumn >
              <IconButton onClick={sData} style={styles.button}>
                <MoreHoriz/>
              </IconButton>
            </TableRowColumn>
          </TableRow>
          </TableBody>
        </Table>
        <ShowDetail/>
        <LinearProgress/>
      </Paper>
    </div>
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
  fData:PropTypes.func,
  sData:PropTypes.func,
  sDetail:PropTypes.func,
  stateFetch:PropTypes.object,
};


const mapStateToProps = (state) => ({
  state:state.reducerQuery,
  stateFetch:state.reducerFetch,
});



const mapDispatchToProps = (dispatch) =>({
  hDrawer: () => dispatch(handleDrawer()),
  hFetch: () => dispatch(handleFetch()),
  hInput: (event, newValue) => dispatch(handleInput(event, newValue)),
  hSnackbar: () => dispatch(handleSnackbar()) ,
  hDialog: () => dispatch(handleDialog()),
  fData:(event, newValue)=> dispatch(fetchData(event, newValue)),
  sData: ()=> dispatch(searchData()),
  sDetail: (id) => dispatch(showDetail(id)) ,
  link:()=>dispatch(push('/add'))
});


export default connect(mapStateToProps, mapDispatchToProps)(Query);
