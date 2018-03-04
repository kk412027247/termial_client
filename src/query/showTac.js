import React from 'react';
import {bindActionCreators}  from 'redux';
import PropTypes from 'prop-types';
import host from "../host";
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import {handleDetailImageUrl, changeTAC, updateDetail, updateTacWithImageByPC, deleteTACImageByPC} from "../actions/fetchActions";
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';
import RemovePhoto from 'material-ui/svg-icons/image/blur-off';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Delete from 'material-ui/svg-icons/action/delete';

const styles = {
  underLine:{
    borderColor: 'transparent'
  } ,
  error:{
    color: '#f44335'
  },
};


class ShowTac extends React.Component{
  state={
    showButton:false ,
    warning:'',
  };

  render(){
    const {tac,index, handleDetailImageUrl, changeTAC, updateDetail,
      auth, updateTacWithImageByPC, deleteTACImageByPC} = this.props;
    const  handleTACChange = (event,value)=>{
      if(value !== this.props.tac.TAC){
        this.setState({warning:'内容已更改'})
      }else{
        this.setState({warning:null})
      }
      changeTAC(event,value)
    };
    const handleKeyDown=(event)=>{
      if(event.keyCode === 13) updateDetail()
    };
    const toggleDelete = () => this.setState({showButton: !this.state.showButton});

    return(
      <div className="item" key={tac._id}>
        <span className="key">
          {`TAC${index+1}`}
          <div className={'add-photo'}>
            {/*创建一个input节点，监听改变事件，再点击*/}
            {
              auth>1 &&
              <IconButton
                tooltip={'增加／替换照片'}
                onClick={updateTacWithImageByPC.bind(null,tac._id)}
              >
                <AddPhoto color={'#00acc1'} />
              </IconButton>
            }

          </div>
          {
            !!tac.imagePath &&
            <div className={'remove-photo'}>
              <IconButton
                tooltip={this.state.showButton?'取消删除照片':'删除照片'}
                onClick={toggleDelete}
              >
                <RemovePhoto/>
              </IconButton>
              {
                this.state.showButton && auth>1 &&
                <IconButton
                  onClick={deleteTACImageByPC.bind(null,tac._id)}
                  tooltip={'确认删除照片'}
                >
                  <Delete color={'#f44336'}/>
                </IconButton>
              }
            </div>
          }
        </span>
        <span className={'tac-value'}>
          {
            auth>1 ?
            <TextField
              id = {tac._id}
              fullWidth={true}
              underlineStyle={styles.underLine}
              defaultValue={tac.TAC}
              hintText={tac.TAC}
              onChange={handleTACChange}
              onKeyDown={handleKeyDown}
              multiLine={false}
              errorText={this.state.warning}
              errorStyle={styles.error}
            /> :
            <TextField
              id = {tac._id}
              fullWidth={true}
              value={tac.TAC}
              multiLine={false}
              underlineShow={false}
            />
          }

          {
            tac.imagePath ?
            <IconButton
              onClick={handleDetailImageUrl.bind(null,`http://${host}:3001${tac.imagePath.replace(/public/,'')}`)}
              className={'check-circle'}
            >
              <CheckCircle
                color={'#43a047'}
              />
            </IconButton> :
            <output className={'check-circle'}/>
          }
        </span>
      </div>
    )
  }
}

ShowTac.propTypes = {
  tac:PropTypes.object,
  index:PropTypes.number,
  handleDetailImageUrl:PropTypes.func,
  changeTAC: PropTypes.func,
  updateDetail:PropTypes.func,
  auth:PropTypes.number,
  deleteTACImageByPC:PropTypes.func,
  updateTacWithImageByPC:PropTypes.func,
};

const mapStateToProps = (state, ownProps)=>({
  auth: state.fetchReducer.userInfo.level,
  tac:ownProps.tac,
  index:ownProps.index,
});

const mapDispatchToProps = (dispatch) =>bindActionCreators({
  handleDetailImageUrl, changeTAC, updateDetail, updateTacWithImageByPC, deleteTACImageByPC
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowTac)
