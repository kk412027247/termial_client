import React from 'react';
import {connect} from 'react-redux';
import {IconMenu} from 'material-ui/IconMenu';
import {MenuItem} from 'material-ui/MenuItem';
import {IconButton} from 'material-ui/IconButton';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity' ;

const position = {
  targetOrigin:{horizontal:'right',vertical:'top'},
  anchorOrigin:{horizontal:'right',vertical:'top'}
};

// class PersonInfo extends React.Component {
//   static muiName = 'FlatButton';
//
//   render(){
//     return(
//       <IconMenu
//         iconButtonElement={ <IconButton><PermIdentity/></IconButton>}
//       >
//         <MenuItem>1</MenuItem>
//         <MenuItem>2</MenuItem>
//       </IconMenu>
//     )
//   }
// }

const PersonInfo = ()=>(

);


PersonInfo.muiName = 'IconMenu';




const mapStateToProps=()=>({});
const mapDispatchToProps=()=>({});

//export default connect(mapStateToProps,mapDispatchToProps)(PersonInfo)
export default  PersonInfo ;

