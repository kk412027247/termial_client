import React from 'react' ;
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField'
import DetailItem from '../query/detailItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {addInput,add,updateDetail} from '../fetchActions';

import './add.css'

const Add = ({add,addInput,updateDetail,state}) =>(
  <div id="add" >

    <Paper className="add">
      <div  className="input">
        <TextField
          hintText='输入网址（只支持中关村在线）'
          fullWidth={true}
          onChange={addInput}
        />
        <div>
          <RaisedButton
            className="button"
            label='提交'
            secondary={true}
            onClick={add}
          />
        </div>

      </div>
      <br/>
      {
        Object.keys(state.detail).length === 0 ?
        <div className='progress'><CircularProgress/></div> :
        <div>
          <DetailItem/>
          <div className="save">
            <RaisedButton
              fullWidth={true}
              label='保存'
              secondary={true}
              onClick={updateDetail}
            />
          </div>
        </div>
      }




    </Paper>
  </div>

);


const mapStateToProps = (state) =>({
  state:state.reducerFetch
});


const mapDispatchToProps = (dispatch)=>({
  addInput:(event, value)=> dispatch(addInput(event, value)),
  add:()=>dispatch(add()),
  updateDetail: ()=> dispatch(updateDetail())
});


export default connect(mapStateToProps,mapDispatchToProps)(Add);
