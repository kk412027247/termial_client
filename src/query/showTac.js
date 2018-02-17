import React from 'react';
import PropTypes from 'prop-types';
import host from "../host";
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import {handleDetailImageUrl} from "../actions/fetchActions";
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';
import RemovePhoto from 'material-ui/svg-icons/image/blur-off';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Delete from 'material-ui/svg-icons/action/delete';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const styles = {
  underLine:{
    borderColor: '#FFF'
  }
};

//tac 部分暂时不能修改

class ShowTac extends React.Component{
  state={showButton:false};
  render(){
    const {tac,index,handleDetailImageUrl} = this.props;
    return(
      <div className="item" key={tac._id}>
        <span className="key">
          {`TAC${index+1}`}
          <div className={'add-photo'}>
            {/*创建一个input节点，监听改变事件，再点击*/}
            <IconButton
              tooltip={'增加／替换照片'}
              onClick={()=>{
                const input  = document.createElement('input');
                input.type = 'file';
                input.addEventListener('change',(event)=>{console.log(event)});
                input.click();
              }}
            >
              <AddPhoto color={'#00acc1'} />
            </IconButton>
          </div>
          <div className={'remove-photo'}>
            <IconButton
              tooltip={this.state.showButton?'取消删除':'删除照片'}
              onClick={()=>{this.setState({showButton:!this.state.showButton})}}
            >
              <RemovePhoto/>
            </IconButton>

              {
                this.state.showButton &&
                <IconButton
                  tooltip={'确认删除'}
                >
                  <Delete color={'#f44336'}/>
                </IconButton>
              }



          </div>
        </span>
        <span className={'tac-value'}>
          <TextField
            id = {tac._id}
            fullWidth={true}
            underlineStyle={styles.underLine}
            value={tac.TAC}
            hintText={tac.TAC}
            //onChange={changeDetail}
            multiLine={false}
            //onKeyDown={handleKeyDown}
            underlineShow={false}
          />
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
};


const mapStateToProps = (state, ownProps)=>({
  tac:ownProps.tac,
  index:ownProps.index,
});

const mapDispatchToProps = (dispatch) =>({
  handleDetailImageUrl:(url)=> dispatch(handleDetailImageUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTac)
