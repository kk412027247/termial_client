import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom'
import {fetchDialog} from "../actionsFetch";
import {orange500} from 'material-ui/styles/colors';

const styles = {
  update:{
    marginRight: '64%',
  },
  link:{
    display:'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  }
};


const ShowDetail= ({state,fDialog}) =>(
  <Dialog
    title="详细信息"
    autoScrollBodyContent={true}
    onRequestClose={fDialog}
    actions={[
      <FlatButton style={styles.update}>
        <Link style={styles.link} to="/update">修改</Link>
      </FlatButton>,
      <FlatButton
        label='导出'
        onClick={fDialog}
      />,
      <FlatButton
        label='取消'
        onClick={fDialog}
      />
    ]}
    open={state.dialog}
    modal={false}
  >
    {Object.keys(state.detail).map(item=>(
      <div key={item} >
        <TextField
          floatingLabelStyle= {{color: orange500}}
          hintText={item}
          floatingLabelText={item}
          value={state.detail[item]}
        />
      </div>
    ))}


  </Dialog>
);



ShowDetail.propTypes = {
 state:PropTypes.object,
  fDialog:PropTypes.func,
};

const mapStateToProps = (state) =>({
  state: state.reducerFetch
});

const mapDispatchToProps = (dispatch) => ({
  fDialog: () => dispatch(fetchDialog())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
