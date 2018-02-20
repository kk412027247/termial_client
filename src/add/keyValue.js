import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500,red500}  from 'material-ui/styles/colors';
import {handleFocus, handleChange} from '../actions/addActions';
const styles = {
  title:{color: orange500},
  error:{color: red500},
  key:{color:'#b2b2b2'}
};

class KeyValue extends React.Component{
  state={warning:''};
  handleChange = (event,value)=>{
    this.props.handleChange(event,value);
    if(value !== this.props.value){
      this.setState({warning:'内容已更改'});
    }else{
      this.setState({warning:''});
    }
  };
  render(){
    const {_key, value,invalid, label, _id, handleFocus} = this.props;
    return(
      <div className={'keyValue'}>
        <div className={'uploadKey'} style={invalid ? styles.key :{}} >{_key}</div>:
        <div className={'value'}>
          <TextField
            disabled={invalid}
            errorText={!invalid ? this.state.warning : ''}
            fullWidth={true}
            defaultValue={value}
            hintText={value}
            //underlineStyle={styles.title}
            errorStyle={styles.error}
            onFocus={handleFocus.bind(null, {label, _id, _key})}
            onBlur={handleFocus.bind(null, {label:'', _id:'', _key:''})}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleFocus:(object)=>dispatch(handleFocus(object)),
  handleChange:(event, value)=>dispatch(handleChange(event, value))
});


export default connect(null, mapDispatchToProps)(KeyValue);
