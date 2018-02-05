import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHistory} from '../actions/hIstoryActions';
import HistoryItem from './historyItem';



class History extends React.PureComponent{

  componentDidMount(){
    this.props.getHistory()
  }
  
  render(){
    const {history}  = this.props;
    return(
      <div>
        {history.map(_history=>
          <HistoryItem
            key={_history._id?_history._id:_history.cache._id}
            history={_history}
          />
        )}
      </div>
    )
  }
}


const mapStateToProps = (state)=>({
  history:state.historyReducer.history
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
  getHistory
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(History);
