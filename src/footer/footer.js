import React from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {PropTypes} from 'prop-types';
import {handleSnackbar} from '../fetchActions';


const Footer = ({snackbar,message, handleSnackbar})=>(
  <footer>
    <Snackbar
      open={snackbar}
      autoHideDuration={4000}
      message={message}
      onRequestClose={handleSnackbar}
    />
  </footer>
);

Footer.propTypes={
  snackbar:PropTypes.bool,
  message:PropTypes.string,
  handleSnackbar:PropTypes.func,
};

const mapStateToProp = (state)=>({
  snackbar:state.reducerFetch.snackbar,
  message:state.reducerFetch.snackbarMessage,
});
const mapDispatchToProp = (dispatch)=>({
  handleSnackbar:()=>dispatch(handleSnackbar())
});

export default connect(mapStateToProp, mapDispatchToProp)(Footer)
