import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHistory,toggleCache,toggleFirstFetchState} from '../actions/historyActions';
import HistoryItem from './historyItem';
import ImageDialog from './imageDialog';
import Toggle from 'material-ui/Toggle';
import './history.css';
import Indicator from './indicator';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

//这页的动画会不会太骚气了
class History extends React.Component{
  componentDidMount(){
    if(this.props.firstFetch){
      this.props.toggleFirstFetchState(false);
      this.props.getHistory();
    }
  }
  shouldComponentUpdate(nextProps){
    return nextProps.history !== this.props.history;
  }
  
  render(){
    const {history,toggleCache,cache}  = this.props;
    const style = {marginTop:20,marginLeft:20,width:120};
    return(
      <div>
        <Toggle
          style={style}
          onToggle={toggleCache}
          label={cache ? '缓存数据':'全部数据'}
          labelPosition={'right'}
        />
          <TransitionGroup>
            {history.map(_history=>
              <CSSTransition
                key={_history._id? _history._id: _history.cache._id}
                classNames={'history'}
                appear={true}
                timeout={500}
              >
                <HistoryItem history={_history}/>
              </CSSTransition>
            )}
          </TransitionGroup>
        <ImageDialog/>
        <Indicator/>
      </div>
    )
  }
}

History.propTypes = {
  history:PropTypes.array,
  cache:PropTypes.bool,
};

const mapStateToProps = (state)=>({
  history:!state.historyReducer.cache?
    state.historyReducer.history: state.historyReducer.history.filter(history =>!!history.cache),
  cache:state.historyReducer.cache,
  firstFetch:state.historyReducer.firstFetch,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
  getHistory,toggleCache,toggleFirstFetchState
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(History);
