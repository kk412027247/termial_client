import React from 'react' ;
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import  Toggle from 'material-ui/Toggle';
import Upload from './upload';
import ManualSpider from './manualSpider';
import {toggleSpider} from '../actions/addActions';
import SwipeableViews from 'react-swipeable-views';
import UploadContent from './uploadContent';
import './add.css';

const toggleStyle = {width:50};
class Add extends React.Component{

  render(){
    const {toggleSpider, index} = this.props;
    return(
      <div >
        <SwipeableViews index={index}>
          <div><Upload /></div>
          <div><ManualSpider /></div>
        </SwipeableViews>
        <Toggle className={'spiderToggle'} onToggle={toggleSpider} style={toggleStyle}/>
        <UploadContent/>
      </div>
    )
  }
}

Add.propTypes={
  toggleSpider:PropTypes.func,
  index:PropTypes.number,
};

const mapStateToProps = (state) =>({
  index:state.addReducer.slideIndex,
});


const mapDispatchToProps = (dispatch)=>({
  toggleSpider:(event, toggle)=> dispatch(toggleSpider(toggle)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Add);
