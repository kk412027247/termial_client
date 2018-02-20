import React from 'react';
import {connect} from 'react-redux'
import Check from 'material-ui/svg-icons/navigation/check';
import Warning from 'material-ui/svg-icons/alert/warning';
import AddAlert from 'material-ui/svg-icons/alert/add-alert';
import ContainItem from './containItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './upload-animate.css'

class UploadContent extends React.Component{
  render(){
    const {valid, dataExist, uploadExist} = this.props;
    return(
      <TransitionGroup>
        {
          valid.length !==0 &&
          <CSSTransition
            classNames={'upload-animate'}
            timeout={300}
            key={valid[0].TAC+'valid'}
          >
            <ContainItem
              info={valid}
              label={'valid'}
              title={'TAC数据新增'}
              color={'#009688'}
              Icon={Check}
            />
          </CSSTransition>
        }
        {
          dataExist.length !==0 &&
          <CSSTransition
            classNames={'upload-animate'}
            timeout={300}
            key={dataExist[0].TAC+'dataExist'}
          >
            <ContainItem
              info={dataExist}
              label={'dataExist'}
              title={'TAC数据已存在'}
              color={'#FF5722'}
              Icon={Warning}
            />
          </CSSTransition>
        }
        {
          uploadExist.length !==0 &&
          <CSSTransition
            classNames={'upload-animate'}
            timeout={300}
            key={uploadExist[0].TAC+'uploadExist'}
          >
            <ContainItem
              info={uploadExist}
              label={'uploadExist'}
              title={'重复上传的TAC数据'}
              color={'#673AB7'}
              Icon={AddAlert}
            />
          </CSSTransition>
        }
      </TransitionGroup>
    )
  }
}

const mapStateToProp = (state) =>({
  valid:state.addReducer.valid,
  dataExist:state.addReducer.dataExist,
  uploadExist:state.addReducer.uploadExist,
});
export default connect(mapStateToProp)(UploadContent);

