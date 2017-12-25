import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {orange500}  from 'material-ui/styles/colors'
const style = {color: orange500};

class KeyValue extends React.Component{
  state={warning:''};
  handleChange = (event,value)=>{
    if(this.props._id) console.log(this.props._id);
    if(value !== this.props.value){
      this.setState({warning:'内容已更改'})
    }else{
      this.setState({warning:''})
    }
  };
  render(){
    const {id,_key ,value} = this.props;
    return(
      <div className={'keyValue'}>
        <div className={'uploadKey'}>{_key}</div>:
        <div className={'value'}>
          <TextField
            errorText={this.state.warning}
            id={id}
            fullWidth={true}
            defaultValue={value}
            hintText={value}
            underlineStyle={style}
            errorStyle={style}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps)=>({
  id:ownProps.arg[0],
  _key:ownProps.arg[1],
  value:ownProps.arg[2],
  _id:ownProps.arg[3],
});

export default connect(mapStateToProps)(KeyValue);
