import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import './updateHistory.css';
import {getUpdateHistory, handleSkip, handlePageUp, handlePageDown, handleDatePicker, getUserList, handleUser} from '../actions/hIstoryActions';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Done from 'material-ui/svg-icons/action/done';
import History from 'material-ui/svg-icons/action/history';
import {green500, orange500} from 'material-ui/styles/colors'

class UpdateHistory extends React.Component{
  componentDidMount(){
    this.props.getUpdateHistory({
      author:".*",
      startDate:this.props.date.toLocaleDateString(),
      endDate:new Date(this.props.date.getTime()+24*60*60*1000).toLocaleDateString(),
      skip:0,
    });
    this.props.getUserList()
  }


  render(){
    const {updateHistory, pages, handlePageUp, handlePageDown, date, handleDatePicker,userList, handleUser, user} = this.props;
    
    return(
      <div className={'updateHistory'}>
        <section className={'condition'}>
          <span className={'checkbox'}>
            <span>
              <Checkbox
                checked={true}
                onCheck={(event,check)=>console.log(check)}
              />
            </span>
            修改人:&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <SelectField value={user} onChange={handleUser}>
            {userList.map(user=>(<MenuItem key={user} value={user} primaryText={user}/>))}
          </SelectField> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={'checkbox'}>
            <span>
              <Checkbox checked={true}/>
            </span>
            修改时间:&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <DatePicker
            id={'datePicker'}
            value={date}
            autoOk={true}
            onChange={handleDatePicker}
          /> 
        </section>
        {updateHistory.map(info=>(
          <Paper key={info._id} className={'paper'}>
            <section className={'updateInfo'}>
              型号：{info.brand} ，修改人：{info.author} ， 修改日期：{info.date.substring(0,10)}
            </section>

            <div className={'update'}>
              <section className={'afterUpdate'}>
                <Done color={green500}/>
                &nbsp;&nbsp;
                <b>修改后：</b>
                {info.afterUpdate.map(afterUpdate=>(
                   <span key={JSON.stringify(afterUpdate)}>
                     {Object.keys(afterUpdate)[0]}：{!!Object.values(afterUpdate)[0]?Object.values(afterUpdate)[0]+'，':'_，'}
                   </span>
                ))}
              </section>

              <section className={'beforeUpdate'}>
                <History color={orange500}/>
                &nbsp;&nbsp;
                <b>修改前：</b>
                {info.beforeUpdate.map(beforeUpdate=>(
                  <span key={JSON.stringify(beforeUpdate)}>
                    {Object.keys(beforeUpdate)[0]}：{!!Object.values(beforeUpdate)[0]?Object.values(beforeUpdate)[0]+'，':'_，'}
                  </span>
                ))}
              </section>
            </div>
          </Paper>
        ))}

        <FlatButton label={'上一页'} primary={true} onClick={handlePageUp}/>
        {pages+1}
        <FlatButton label={'下一页'} primary={true} onClick={handlePageDown}/>
      </div>
    )
  }
}


const mapStateToProps = (state)=>({
  updateHistory:state.historyReducer.updateHistory,
  pages:state.historyReducer.pages,
  date:state.historyReducer.date,
  userList:state.historyReducer.userList,
  user:state.historyReducer.user,
});

const mapDispatchToProps = (dispatch)=>({
  getUpdateHistory:(query)=>dispatch(getUpdateHistory(query)),
  handleSkip:(num)=>dispatch(handleSkip(num)),
  getUserList:()=>dispatch(getUserList()),
  handlePageUp:()=>{
    dispatch(handlePageUp());
    //window.scrollTo(0,0);
  },
  handlePageDown:()=>{
    dispatch(handlePageDown());
    //window.scrollTo(0,0)
  },
  handleDatePicker:(event,date)=>dispatch(handleDatePicker(date)),
  handleUser:(event,index,value)=>dispatch(handleUser(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateHistory);
