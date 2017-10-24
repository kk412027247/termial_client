import React from 'react' ;
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField'

const styles = {
  paper:{
    padding:'30px'
  }
};

const Add = () =>(
  <div id="add">
    <Paper style = {styles.paper}>
      <TextField
        hintText='厂商'
        floatingLabelText='厂商'
      />
      <br/>
      <TextField
        hintText='品牌'
        floatingLabelText='品牌'
      />
      <br/>
      <TextField
        hintText='价格'
        floatingLabelText='上市时间'
      />
      <br/>
      <TextField
        hintText='网络'
        floatingLabelText='网络'
      />
      <br/>
      <TextField
        hintText='系统'
        floatingLabelText='系统'
      />
      <br/>
      <TextField
        hintText='CSFB'
        floatingLabelText='CSFB'
      />
      <br/>
      <TextField
        hintText='FR'
        floatingLabelText='FR'
      />
      <br/>
      
    </Paper>
  </div>

);




export default Add;
