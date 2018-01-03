import React from 'react';
import {connect} from 'react-redux';
import KeyValue from './keyValue';
import FlatButton from 'material-ui/FlatButton';
import {handleFilter} from '../actions/addActions';
import './uploadContent.css';

class TextFieldGroup extends React.Component {
  state={invalid:false};
  handleInvalid = (_id)=>{
    this.setState({invalid: !this.state.invalid});
    this.props.handleFilter(this.props.label, _id);
  };
  render(){
    const {_info, label, _id, invalid} = this.props;
    return(
      <div className={'textFieldGroup'} >
        <KeyValue
          label={label}
          _id={_id}
          _key={'TAC'}
          value={_info.TAC.toString()}
          invalid={this.state.invalid}
        />
        <KeyValue
          label={label}
          _id={_id}
          _key={'品牌1'}
          value={_info['品牌1']}
          invalid={this.state.invalid}
        />
        <KeyValue
          label={label}
          _id={_id}
          _key={'型号1'}
          value={_info['型号1']}
          invalid={this.state.invalid}
        />
        <div className={'deleteButton'}>
          <FlatButton
            secondary={true}
            label={this.state.invalid ? '恢复' : '删除'}
            onClick={this.handleInvalid.bind(null,_id)}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  handleFilter:(label, _id)=>dispatch(handleFilter(label, _id)),
});

export default connect(null, mapDispatchToProps)(TextFieldGroup);
