import React from 'react' ;
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField'
import DetailItem from '../query/detailItem';
import RaisedButton from 'material-ui/RaisedButton';
import {addInput,add,updateDetail} from '../actionsFetch';

import './add.css'

const styles = {
  add:{
    border:'1px solid red'
  }
};



const Add = ({add,addInput,updateDetail}) =>(
  <div id="add" style={styles.add}>

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
      <DetailItem/>

      <div className="save">
        <RaisedButton
          fullWidth={true}
          label='保存'
          secondary={true}
          onClick={updateDetail}
        />
      </div>

    </Paper>






  </div>

);




const mapDispatchToProps = (dispatch)=>({
  addInput:(event, value)=> dispatch(addInput(event, value)),
  add:()=>dispatch(add()),
  updateDetail: ()=> dispatch(updateDetail())
});


export default connect(null,mapDispatchToProps)(Add);
