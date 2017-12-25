import React from 'react';
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './uploadContent.css';
import KeyValue from './keyValue';

class ContainItem extends React.Component{
  render(){

    const {info,title,color,Icon} = this.props;
    const style = {color};
    return(
      <Paper className={'containPaper'}>
        <div className={'uploadInfoTitle'}>
          <Icon color={color}/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p style={style}>{title}</p>
        </div>
        <div className={'content'}>
          {info.map((_info,index)=>(
            <div className={'textFieldGroup'} key={JSON.stringify(_info)}>
              <KeyValue arg={[_info.TAC.toString(),'TAC',_info.TAC,_info._id]}/>
              <KeyValue arg={[_info['品牌1']+index,'品牌1',_info['品牌1'],_info._id]}/>
              <KeyValue arg={[_info['型号1']+index,'型号1',_info['型号1'],_info._id]}/>
            </div>
          ))}
        </div>
        <RaisedButton
          className={'uploadButton'}
          backgroundColor={color}
          labelColor={'#f9f9f9'}
          label={'提交'}
        />
      </Paper>
    )
  }
}
const mapStateToProp = (state,ownProps) =>({
  info:ownProps.arg[0],
  title:ownProps.arg[1],
  color:ownProps.arg[2],
  Icon:ownProps.arg[3],
});
export default connect(mapStateToProp)(ContainItem);

