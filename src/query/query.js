import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn} from 'material-ui/Table';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Language from 'material-ui/svg-icons/action/language';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css';
import {fetchData, searchData, showDetail, downloadQuery} from '../fetchActions.js'
import ShowDetail from './showDetail.js'
import Download from '../download/download';

//import {push} from 'react-router-redux';

const styles= {
  button:{
    display: 'flex',
    flex: 1,
  },
  appBar:{
    backgroundColor: '#00BCD4'
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
  },
  brand:{
    width:'50px'
  }
};

class Query extends React.Component {
  
  shouldComponentUpdate(nextProp){
    return(JSON.stringify(nextProp.result) !== JSON.stringify(this.props.result));
  }


  render(){
    const { fetchData, searchData, showDetail,result,downloadQuery} = this.props;
    return(
      <div>
        <div id="main">
          <div className="searchInput">
            <Paper className="searchPaper">
              <TextField
                style={styles.search}
                hintStyle={styles.hint}
                inputStyle={styles.input}
                hintText='请输入：厂商 品牌 上市时间进行查询'
                underlineShow={false}
                onChange={fetchData}
              />
              <IconButton
                tooltip='点击显示更多内容'
                touch={true}
                style={styles.iconButton}
                iconStyle={styles.icon}
                label="搜索"
                onClick={searchData}
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
              style={styles.appBar}
              iconElementLeft={<IconButton><Language/></IconButton>}
            />
            <Table
              multiSelectable={true}
              fixedHeader={true}
              onRowSelection={downloadQuery}
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn style={styles.brand}>厂商</TableHeaderColumn>
                  <TableHeaderColumn style={styles.tradMark}>品牌</TableHeaderColumn>
                  <TableHeaderColumn>价格</TableHeaderColumn>
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
                {result.map((item,index)=>(
                  <TableRow key={item["_id"]} >
                    <TableRowColumn style={styles.brand}>{item['厂商(中文)']}</TableRowColumn>
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
                        onClick={showDetail.bind(null,item["_id"])}
                        style={styles.button}
                      >
                        <MoreHoriz/>
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ShowDetail/>
            <LinearProgress/>
          </Paper>
          <Download/>
        </div>
      </div>
    )
  }
}





Query.propTypes = {
  result: PropTypes.array,
  fetchData:PropTypes.func,
  searchData:PropTypes.func,
  showDetail:PropTypes.func,
  downloadQuery:PropTypes.func,
};


const mapStateToProps = (state) => ({
  result:state.reducerFetch.result,
});



const mapDispatchToProps = (dispatch) =>({
  fetchData:(event, newValue)=> dispatch(fetchData(event, newValue)),
  searchData: ()=> dispatch(searchData()),
  showDetail: (id) => dispatch(showDetail(id)) ,
  downloadQuery: (index)=>dispatch(downloadQuery(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Query);
