import React from 'react' ;
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField'
import DetailItem from '../query/detailItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {addInput,add,updateDetail} from '../actions/fetchActions';
import './manualSpider.css';

class ManualSpider extends React.Component{

  // componentDidUpdate(){
  //   console.log('AddComponent did update')
  // }

  render(){
    const {add,addInput,updateDetail,spiderStatus} = this.props;
    const handleKeyDown=(event)=>{
      if(event.keyCode ===13){add()}
    };
    return(
      <div id="add" >
        <Paper className="add">
          <div  className="input">
            <TextField
              hintText='输入地址（只支持中关村在线）'
              fullWidth={true}
              onChange={addInput}
              onKeyDown={handleKeyDown}
            />
            <div>
              <RaisedButton
                className="button"
                label='发起爬虫'
                secondary={true}
                onClick={add}
              />
            </div>
          </div>
          <br/>


          <div className='progress'>
            <ReactCSSTransitionGroup
              transitionName='load'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {spiderStatus==='fetching'
                ? <CircularProgress/>
                : ''
              }
            </ReactCSSTransitionGroup>
          </div>
        </Paper>

        <ReactCSSTransitionGroup
          transitionName='load'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {spiderStatus==='haveDone'
            ? <Paper className='add detailItem'>
              <DetailItem />
              <div className="save">
                <RaisedButton
                  fullWidth={true}
                  label='保存修改'
                  secondary={true}
                  onClick={updateDetail}
                />
              </div>
            </Paper>
            : ''
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


ManualSpider.protoTypes={
  spiderStatus:PropTypes.string,
  addInput:PropTypes.func,
  add:PropTypes.func,
  updateDetail:PropTypes.func,
};

const mapStateToProps = (state) =>({
  spiderStatus:state.fetchReducer.spiderStatus,
});


const mapDispatchToProps = (dispatch)=>({
  addInput:(event, value)=> dispatch(addInput(event, value)),
  add:()=>dispatch(add()),
  updateDetail: ()=> dispatch(updateDetail())
});


export default connect(mapStateToProps,mapDispatchToProps)(ManualSpider);
