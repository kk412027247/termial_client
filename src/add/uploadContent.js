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
        {valid.length !==0
          ? <ContainItem
            info={valid}
            label={'valid'}
            title={'TAC数据新增'}
            color={'#009688'}
            Icon={Check}
          />
          : ''
        }
        {dataExist.length !==0
          ? <ContainItem
            info={dataExist}
            label={'dataExist'}
            title={'TAC数据已存在'}
            color={'#FF5722'}
            Icon={Warning}
          />
          : ''}
        {uploadExist.length !==0
          ? <ContainItem
            info={uploadExist}
            label={'uploadExist'}
            title={'重复上传的TAC数据'}
            color={'#673AB7'}
            Icon={AddAlert}
          />
          : ''}
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

