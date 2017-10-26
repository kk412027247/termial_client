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
import {fetchData, searchData, showDetail} from '../actionsFetch.js'
import ShowDetail from './showDetail.js'

const styles= {
  button:{
    display: 'flex',
    flex: 1,
  }
};

const Query = ({hDrawer, hFetch, hInput, hSnackbar, hDialog, state ,fData,stateFetch, sData, sDetail}) =>(
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
            onChange={fData}
          />
          <IconButton
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

        <Table multiSelectable={true} fixedHeader={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>厂商</TableHeaderColumn>
              <TableHeaderColumn style={{width:'100px'}}>品牌</TableHeaderColumn>
              <TableHeaderColumn  style={{width:'80px'}}>价格</TableHeaderColumn>
              <TableHeaderColumn style={{width:'80px'}}>上市时间</TableHeaderColumn>
              <TableHeaderColumn>双卡双待</TableHeaderColumn>
              <TableHeaderColumn style={{width:'50px'}}>系统</TableHeaderColumn>
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
                <TableRowColumn >{item['厂商']}</TableRowColumn>
                <TableRowColumn style={{width:'100px'}}>{item[ "品牌(英文)"]}</TableRowColumn>
                <TableRowColumn style={{width:'80px'}}>{item["价格"]}</TableRowColumn>
                <TableRowColumn style={{width:'80px'}}>{item["上市时间"]}</TableRowColumn>
                <TableRowColumn >{item["SIM卡"].includes('双')?1:0}</TableRowColumn>
                <TableRowColumn style={{width:'50px'}}>{item["操作系统"]}</TableRowColumn>
                <TableRowColumn >{item["网络制式"]}</TableRowColumn>
                <TableRowColumn >{item["WIFI"]?1:0}</TableRowColumn>
                <TableRowColumn >{item["是否智能机"]?1:0}</TableRowColumn>
                <TableRowColumn >{item["单卡双待"]?0:1}</TableRowColumn>
                <TableRowColumn >{item["CSFB"]}</TableRowColumn>
                <TableRowColumn >{item["VOLTE"]}</TableRowColumn>
                <TableRowColumn >
                  <IconButton onClick={sDetail.bind(null,item["_id"])} style={styles.button}>
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

    <footer>
      <Snackbar
        open={stateFetch.snackbar}
        message={stateFetch.snackbarMessage}
        onRequestClose={hSnackbar}
      />
    </footer>
    {console.log(stateFetch)}
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
  sDetail: (id) => dispatch(showDetail(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Query);
