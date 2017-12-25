import React from 'react';
import {connect} from 'react-redux'
import Check from 'material-ui/svg-icons/navigation/check';
import Warning from 'material-ui/svg-icons/alert/warning';
import AddAlert from 'material-ui/svg-icons/alert/add-alert';
import ContainItem from './containItem';

class UploadContent extends React.Component{
  render(){
    const {valid, dataExist, uploadExist} = this.props;

    return(
      <div>
        {valid.length !==0 ? <ContainItem arg={[valid,'新增TAC数据','#009688',Check]}/> : ''}
        {dataExist.length !==0 ? <ContainItem arg={[dataExist,'TAC数据已存在','#FF5722',Warning]}/> : ''}
        {uploadExist.length !==0 ? <ContainItem arg={[uploadExist,'重复上传的数据','#673AB7',AddAlert]}/> : ''}
      </div>
    )
  }
}

const mapStateToProp = (state) =>({
  valid:state.addReducer.valid,
  dataExist:state.addReducer.dataExist,
  uploadExist:state.addReducer.uploadExist,
});
export default connect(mapStateToProp)(UploadContent);

