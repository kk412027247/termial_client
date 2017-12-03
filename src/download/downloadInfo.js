import React from 'react';
import {connect} from 'react-redux';
import Chip from 'material-ui/Chip';
import {PropTypes} from 'prop-types';
import {handleCombine} from '../actions/fetchActions'
import {blue300} from 'material-ui/styles/colors'
import './downloadInfo.css';

class DownloadInfo extends React.Component{
  render(){
    const {infos, handleCombine} = this.props;
    return(
      <div className={'downloadInfo'}>
        {infos.length !==0
          ? infos.map(info=>(
            <Chip
              className={'chip'}
              key={info.brand+info.model}
              onRequestDelete={handleCombine.bind(null,info._id)}
              backgroundColor={blue300}
            >
              {info.brand+' '+info.model}
            </Chip>
          ))
          : <output className={'downloadInfo'}/>
        }
      </div>
    )
  }
}

DownloadInfo.propTypes = {
  infos:PropTypes.array,
  handleCombine:PropTypes.func,
};

const mapStateToProps = (state)=>({
  infos:state.fetchReducer.combineInfo
});
const mapDispatchToProps = (dispatch)=>({
  handleCombine:(_id)=>dispatch(handleCombine(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadInfo)


