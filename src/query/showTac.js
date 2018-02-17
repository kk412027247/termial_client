import React from 'react';
import host from "../host";
import {connect} from 'react-redux';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {handleDetailImageUrl} from "../actions/fetchActions";
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';
import RemovePhoto from 'material-ui/svg-icons/image/blur-off';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
const styles = {
  underLine:{
    borderColor: '#FFF'
  }
};

//tac 部分暂时不能修改
// todo 删除按钮的ui再想象怎么写，是否需要把每一条tac独立

class ShowTac extends React.Component{
  state={showButton:false};
  render(){
    const {detail,handleDetailImageUrl} = this.props;
    return(
      <div>
        <div className="contain0">
          <span className="contain1">TAC</span>
          <span className="contain2">
        {Array.isArray(detail.tac) && detail.tac.map((tac,index)=>(
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
                 onClick={()=>{this.setState({showButton:!this.state.showButton})}}
                 tooltip={'删除照片'}
               >
                <RemovePhoto/>
                 {
                   this.state.showButton &&  <div><RaisedButton label={'取消'}/> <RaisedButton label={'确认删除'}/></div>
                 }
              </IconButton>
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
        ))}
      </span>
        </div>
        <Divider inset={true}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>({
  detail:ownProps.detail,
});

const mapDispatchToProps = (dispatch) =>({
  handleDetailImageUrl:(url)=> dispatch(handleDetailImageUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTac)
