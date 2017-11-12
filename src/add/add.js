import React from 'react' ;
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField'
import DetailItem from '../query/detailItem';
import RaisedButton from 'material-ui/RaisedButton';

import './add.css'

const styles = {
  add:{
    border:'1px solid red'
  }
};



const Add = () =>(
  <div id="add" style={styles.add}>

    <Paper className="add">
      <div  className="input">
        <TextField
          hintText='输入网址（只支持中关村在线）'
          fullWidth={true}
          onKeyDown={(event)=>console.log(event.keyCode)}
        />
        <div>
          <RaisedButton
            className="button"
            label='提交'
            secondary={true}
          />
        </div>

      </div>

      <br/><br/>

      <DetailItem/>
      <div className="save">
        <RaisedButton
          fullWidth={true}
          label='保存'
          secondary={true}
        />
      </div>

    </Paper>






  </div>

);


const mapStateToProps = ()=>({});

const mapDispatchToProps = ()=>({});


export default connect(mapStateToProps,mapDispatchToProps)(Add);
