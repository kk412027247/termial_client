import React from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './uploadContent.css';
import TextFieldGroup from './textFieldGroup';
import {handleFetch} from '../actions/addActions';

class ContainItem extends React.Component{
  render(){
    const {info, title, color, Icon, label, handleFetch} = this.props;
    const style = {color};
    return(
      <Paper className={'containPaper'}>
        <div className={'uploadInfoTitle'}>
          <Icon color={color}/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p style={style}>{title}</p>
        </div>
        <div className={'content'}>
          {info.map((_info)=>(
            <TextFieldGroup
              label={label}
              _id={_info._id}
              key={_info._id+label}
              _info={_info}
              invalid={_info.invalid}
            />
          ))}
        </div>
        <RaisedButton
          className={'uploadButton'}
          backgroundColor={color}
          labelColor={'#f9f9f9'}
          label={'提交'}
          onClick={handleFetch.bind(null,label)}
        />
      </Paper>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  handleFetch:(label)=>dispatch(handleFetch(label))
});
export default connect(null, mapDispatchToProps)(ContainItem);

