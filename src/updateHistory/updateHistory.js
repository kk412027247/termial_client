import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import './updateHistory.css';
import {getUpdateHistory, handleSkip, handlePageUp, handlePageDown} from '../actions/hIstoryActions'

class UpdateHistory extends React.Component{
  componentDidMount(){
    this.props.getUpdateHistory({
      author:".*",
      startDate:new Date(1970-1-1).toLocaleDateString(),
      endDate:new Date(Date.now()+24*60*60*1000).toLocaleDateString(),
      skip:0,
    })
  }
  render(){
    const {updateHistory, pages, handleSkip, handlePageUp, handlePageDown} = this.props;

    return(
      <div className={'updateHistory'}>
        条件筛选：修改人__，修改时间__，
        {updateHistory.map(info=>(
          <Paper key={info._id} className={'paper'}>
            <section className={'updateInfo'}>
              型号：{info.brand} ，修改人：{info.author} ， 修改日期：{info.date.substring(0,10)}
            </section>

            <section className={'afterUpdate'}>
              <b>修改后：</b>
              {info.afterUpdate.map(afterUpdate=>(
                 <span key={JSON.stringify(afterUpdate)}>
                   {Object.keys(afterUpdate)[0]}：{!!Object.values(afterUpdate)[0]?Object.values(afterUpdate)[0]+'，':'_，'}
                 </span>
              ))}
            </section>

            <section className={'beforeUpdate'}>
              <b>修改前：</b>
              {info.beforeUpdate.map(beforeUpdate=>(
                <span key={JSON.stringify(beforeUpdate)}>
                  {Object.keys(beforeUpdate)[0]}：{!!Object.values(beforeUpdate)[0]?Object.values(beforeUpdate)[0]+'，':'_，'}
                </span>
              ))}
            </section>
          </Paper>
        ))}

        <FlatButton label={'上一页'} primary={true} onClick={handlePageUp}/>
        {pages}
        <FlatButton label={'下一页'} primary={true} onClick={handlePageDown}/>
        {console.log(pages)}
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  updateHistory:state.historyReducer.updateHistory,
  pages:state.historyReducer.pages,
});

const mapDispatchToProps = (dispatch)=>({
  getUpdateHistory:(query)=>dispatch(getUpdateHistory(query)),
  handleSkip:(num)=>dispatch(handleSkip(num)),
  handlePageUp:()=>dispatch(handlePageUp()),
  handlePageDown:()=>dispatch(handlePageDown())
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateHistory);
