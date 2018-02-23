import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import './export.css';
import RaisedButton from 'material-ui/RaisedButton'
import {handleStartDate, handleEndDate} from '../actions/exportActions';
import {snackbarMessage} from '../actions/fetchActions';

const  DateTimeFormat = global.Intl.DateTimeFormat;
class Export extends React.Component{
  render(){
    const {handleStartDate, handleEndDate, bool, url, snackbarMessage} = this.props;
    return(
      <div id={'export'}>
        <Paper className={'datePicker'}>
          <DatePicker
            hintText="开始日期"
            DateTimeFormat={DateTimeFormat}
            okLabel="确认"
            cancelLabel="取消"
            locale="zh-cn"
            autoOk={true}
            onChange={handleStartDate}
          />
          <DatePicker
            hintText="结束日期"
            DateTimeFormat={DateTimeFormat}
            okLabel="确认"
            cancelLabel="取消"
            locale="zh-cn"
            autoOk={true}
            onChange={handleEndDate}
          />
          <div>
            <RaisedButton
              disabled={!bool}
              onClick={snackbarMessage.bind(null,'正在下载，请稍后')}
              primary={true}
              label={'导出'}
              href={url}
            />
          </div>
        </Paper>
          <div className={'warning'}>
            {!bool && '请输入正确的日期信息'}
          </div>
      </div>
    )
  }
}

Export.propTypes = {
  bool:PropTypes.bool,
  url:PropTypes.string,
  handleStartDate: PropTypes.func,
  handleEndDate: PropTypes.func,
  snackbarMessage: PropTypes.func,
};


const mapStateToProps = state =>({
  bool:state.exportReducer.bool,
  url:state.exportReducer.url,
});

const mapDispatchToProps = dispatch =>bindActionCreators({
  handleStartDate, handleEndDate,snackbarMessage
},dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(Export);
