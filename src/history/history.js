import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHistory,toggleCache} from '../actions/historyActions';
import HistoryItem from './historyItem';
import ImageDialog from './imageDialog';
import Toggle from 'material-ui/Toggle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './history.css';
import Indicator from './indicator';




//这页的动画会不会太骚气了
class History extends React.PureComponent{

  componentDidMount(){
    this.props.getHistory()
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

        <ReactCSSTransitionGroup
          transitionName="history"
          transitionAppear={false}
          //transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {history.filter( _history => !cache || !!_history.cache).map(_history=>
            <HistoryItem
              key={_history._id?_history._id:_history.cache._id}
              history={_history}
            />
          )}
        </ReactCSSTransitionGroup>


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
  history:state.historyReducer.history,
  cache:state.historyReducer.cache,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
  getHistory,toggleCache
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(History);
