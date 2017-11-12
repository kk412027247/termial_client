import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
//import {Link} from 'react-router-dom'
import {fetchDialog, updateDetail} from "../actionsFetch";
import DetailItem from './detailItem';


const styles = {
  update:{
    marginRight: '64%',
  },
  link:{
    display:'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  dialogContent:{
    width: '1263px',
    maxWidth:'none'
  },
  title:{
    marginLeft:'14%',
  },
  underLine:{
    borderColor: '#FFF'
  }
};

class ShowDetail extends React.Component{

  render(){
    const {state,fDialog,updateDetail} = this.props;

    const  actions=[
      <RaisedButton
        primary={true}
        style={styles.update}
        label="修改"
        onClick={updateDetail}
      />,
      <FlatButton
        label='导出'
        onClick={fDialog}
      />,
      <FlatButton
        label='取消'
        onClick={fDialog}
      />
    ];


    return(
      <Dialog
        title="详细信息"
        titleStyle={styles.title}
        autoScrollBodyContent={true}
        contentStyle={styles.dialogContent}
        onRequestClose={fDialog}
        actions={actions}
        //open={true}
        open={state.dialog}
        modal={false}
      >
        <br/>
       <DetailItem/>
      </Dialog>
    )
  }
}

ShowDetail.propTypes = {
  fDialog:PropTypes.func,
  updateDetail:PropTypes.func,
};

const mapStateToProps = (state) =>({
  state: state.reducerFetch
});

const mapDispatchToProps = (dispatch) => ({
  fDialog: () => dispatch(fetchDialog()),
  updateDetail: ()=> dispatch(updateDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
