import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {fetchData, searchData} from '../actions/fetchActions.js'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import './search.css';

const styles= {
  search:{
    display:'flex',
    flex: 0.8
  },
  hint:{
    fontSize: '25px'
  },
  input:{
    fontSize: '25px'
  },
  iconButton:{
    marginTop: -7
  },
  icon:{
    width: 38,
    height: 38,
  },
};

class Search extends React.Component{

  render(){
    const {fetchData, searchData} = this.props;
    return(
      <div>
        <div className="searchInput">
          <Paper className="searchPaper">
            <TextField
              style={styles.search}
              hintStyle={styles.hint}
              inputStyle={styles.input}
              hintText='请输入：TAC/厂商/品牌/型号 进行查询'
              underlineShow={false}
              onChange={fetchData}
            />
            <IconButton
              tooltip='点击显示更多内容'
              touch={true}
              style={styles.iconButton}
              iconStyle={styles.icon}
              onClick={searchData}
            >
              <ActionSearch />
            </IconButton>
          </Paper>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  fetchData:PropTypes.func,
  searchData:PropTypes.func,
};


const mapDispatchToProps = (dispatch)=>({
  fetchData:(event, newValue)=> dispatch(fetchData(event, newValue)),
  searchData: ()=> dispatch(searchData()),
});

export default connect(null ,mapDispatchToProps)(Search)
