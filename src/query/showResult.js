import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {downloadQuery, showDetail} from "../actions/fetchActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IconButton from 'material-ui/IconButton';
import PropTypes from "prop-types";
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Language from 'material-ui/svg-icons/action/language';

const styles= {
  appBar:{
    backgroundColor: '#00BCD4'
  },
  button:{
    display: 'flex',
    flex: 1,
  },
  subModel:{
    width:180
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

const LeftIcon = ()=> <IconButton><Language color={'#fffffe'}/></IconButton> ;

const Show = ({showDetail, result, downloadQuery,auth}) =>(
  <Paper className="show">
    <AppBar
      title="显示数据"
      style={styles.appBar}
      iconElementLeft={<LeftIcon/>}
    />
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
          <TableHeaderColumn style={styles.subModel}>子型号</TableHeaderColumn>
          <TableHeaderColumn >上市时间</TableHeaderColumn>
          <TableHeaderColumn>市场价格</TableHeaderColumn>
          <TableHeaderColumn >系统</TableHeaderColumn>
          <TableHeaderColumn>更多</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result.map((item)=>(
          <TableRow key={item["_id"]} >
            <TableRowColumn >{item["厂商(中文)"]}</TableRowColumn>
            <TableRowColumn >{item["品牌(英文)"]}</TableRowColumn>
            <TableRowColumn >{item["型号"]}</TableRowColumn>
            <TableRowColumn style={styles.subModel}>{item["子型号"]}</TableRowColumn>
            <TableRowColumn >{item["上市时间(年月，格式：YYYYMM)"]}</TableRowColumn>
            <TableRowColumn >{item["市场价格"]}</TableRowColumn>
            <TableRowColumn >{item["操作系统"]}</TableRowColumn>
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
    <LinearProgress/>
  </Paper>
);

Show.propTypes = {
  result: PropTypes.array,
  showDetail:PropTypes.func,
  downloadQuery:PropTypes.func,
  auth:PropTypes.number,
};

const mapStateToProps = (state) => ({
  auth: state.fetchReducer.userInfo.level,
  result:state.fetchReducer.result
});

const mapDispatchToProps = dispatch => bindActionCreators({showDetail, downloadQuery}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Show);

