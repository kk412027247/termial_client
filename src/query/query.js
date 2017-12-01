import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn} from 'material-ui/Table';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import Language from 'material-ui/svg-icons/action/language';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css';
import {showDetail, downloadQuery} from '../actions/fetchActions.js'
import ShowDetail from './showDetail.js'
import Download from '../download/download';
import DownloadInfo from '../download/downloadInfo';
import Search from './search'

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
    const { showDetail, result, downloadQuery,auth} = this.props;
    return(
      <div>

        <div id="main">
          <Search/>
          <Divider/>
          <br/>
          <Paper className="show">
            <AppBar
              title="显示数据"
              style={styles.appBar}
              iconElementLeft={<IconButton><Language/></IconButton>}
            />
            {/*暂时不让多选，因多选影响了UI展示*/}
            <Table
              multiSelectable={true}
              fixedHeader={true}
              onRowSelection={downloadQuery}
              selectable={auth>=3}
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn >厂商</TableHeaderColumn>
                  <TableHeaderColumn >品牌</TableHeaderColumn>
                  <TableHeaderColumn>型号</TableHeaderColumn>
                  <TableHeaderColumn >上市时间</TableHeaderColumn>
                  <TableHeaderColumn>市场价格</TableHeaderColumn>
                  <TableHeaderColumn >系统</TableHeaderColumn>
                  <TableHeaderColumn>CPU数量</TableHeaderColumn>
                  <TableHeaderColumn>存储空间</TableHeaderColumn>
                  <TableHeaderColumn>更多</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.map((item,index)=>(
                  <TableRow key={item["_id"]} >
                    <TableRowColumn >{item["厂商(中文)"]}</TableRowColumn>
                    <TableRowColumn >{item["品牌(英文)"]}</TableRowColumn>
                    <TableRowColumn >{item["型号"]}</TableRowColumn>
                    <TableRowColumn >{item["上市时间(年月，格式：YYYYMM)"]}</TableRowColumn>
                    <TableRowColumn >{item["市场价格"]}</TableRowColumn>
                    <TableRowColumn >{item["操作系统"]}</TableRowColumn>
                    <TableRowColumn >{item["CPU数量"]}</TableRowColumn>
                    <TableRowColumn >{item["手机存储空间大小"]}</TableRowColumn>
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
          <DownloadInfo/>
          <Download/>
        </div>
      </div>
    )
  }
}

Query.propTypes = {
  result: PropTypes.array,
  showDetail:PropTypes.func,
  downloadQuery:PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.fetchReducer.userInfo.level,
  result:state.fetchReducer.result
});

const mapDispatchToProps = (dispatch) =>({
  showDetail: (id) => dispatch(showDetail(id)) ,
  downloadQuery: (index)=>dispatch(downloadQuery(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Query);
