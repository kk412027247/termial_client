import React from 'react';
import {connect} from 'react-redux';
import Chip from 'material-ui/Chip';
import {PropTypes} from 'prop-types';

class DownloadInfo extends React.Component{
  render(){
    const {infos} = this.props;
    const deleteChip =()=>{
      console.log('delete')
    };
    const handleClick = ()=>{
      console.log('click')
    };
    return(
      <div>
        {infos.map(info=>(
          <Chip
            key={info}
            onRequestDelete={deleteChip}
            onClick={handleClick}
          >
            {info}
          </Chip>
        ))}

      </div>
    )
  }
}

DownloadInfo.propTypes = {
  infos:PropTypes.array,
};

const mapStateToProps = (state)=>({
  infos:state.fetchReducer.downloadInfo
});
const mapDispatchToProps = ()=>({});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadInfo)


