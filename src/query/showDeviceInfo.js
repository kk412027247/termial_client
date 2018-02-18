import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {changeDetail, updateDetail} from "../actions/fetchActions";
import {connect} from "react-redux";


const styles = {
  underLine:{
    borderColor: 'transparent'
  } ,
  error:{
    color: '#f44335'
  },
};

class ShowDeviceInfo extends React.Component{
  state={warning:''};
  render(){
    const {detail, changeDetail, updateDetail, auth, item} = this.props;
    const handleKeyDown=(event)=>{
      if(event.keyCode === 13) updateDetail()
    };

    const  handleDeviceInfoChange  = (event, value)=>{
      if(value !== detail[item]){
        this.setState({warning:'内容已更改'})
      }else{
        this.setState({warning:null})
      }
      changeDetail(event, value)
    };

    return(
      <div className="item">
        <span className="key">{item}</span>
        {
          auth>1 ?
          <TextField
            id = {item}
            fullWidth={true}
            underlineStyle={styles.underLine}
            defaultValue={detail[item]}
            hintText={detail[item]}
            onChange={handleDeviceInfoChange}
            multiLine={false}
            onKeyDown={handleKeyDown}
            errorText={this.state.warning}
            errorStyle={styles.error}
          /> :
          <TextField
            id = {item}
            fullWidth={true}
            value={detail[item]}
            multiLine={false}
            underlineShow={false}
          />
        }
      </div>
    )
  }
}

ShowDeviceInfo.propTypes ={
  item:PropTypes.string,
  detail: PropTypes.object,
  changeDetail: PropTypes.func,
  updateDetail: PropTypes.func,
  auth:PropTypes.number,
};



const mapStateToProps = (state,ownProps)=>({
  item:ownProps.item,
  detail: state.fetchReducer.detail,
  auth: state.fetchReducer.userInfo.level,
});

const mapDispatchToProps = (dispatch) =>({
  updateDetail: ()=> dispatch(updateDetail()),
  changeDetail: (event, newValue)=> dispatch(changeDetail(event, newValue)) ,
});

export default connect (mapStateToProps, mapDispatchToProps)(ShowDeviceInfo)



