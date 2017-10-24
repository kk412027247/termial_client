import React from 'react' ;
import Paper from 'material-ui/Paper';
import TextField   from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles ={
    paperSearch:{
      padding:'0 30px'
    },
    paperShow:{
      padding: '30px',
      marginTop: '15px'
    }
};

const Update = () =>(
  <div>
  <Paper style={styles.paperSearch}>
    <TextField
      floatingLabelText='输入手机品牌'
    />
    <TextField
      floatingLabelText='输入手机型号'
    />
    <RaisedButton
      label="搜索"
    />
  </Paper>
 <Paper style={styles.paperShow}>
     <TextField
       hintText='厂商'
       floatingLabelText='厂商'
       defaultValue='vivo'
     />
     <br/>
     <TextField
       hintText='品牌'
       floatingLabelText='品牌'
       defaultValue='X20 Plus'
     />
     <br/>
     <TextField
       hintText='价格'
       floatingLabelText='价格'
       defaultValue='2000-3000'
     />
     <br/>
     <TextField
       hintText='网络'
       floatingLabelText='网络'
       defaultValue='4g'
     />
     <br/>
     <TextField
       hintText='系统'
       floatingLabelText='系统'
       defaultValue='android'
     />
     <br/>
     <TextField
       hintText='CSFB'
       floatingLabelText='CSFB'
       defaultValue='是'
     />
     <br/>
     <TextField
       hintText='FR'
       floatingLabelText='FR'
       defaultValue='是'
     />
   
 </Paper>
  </div>
);

export default Update ;
