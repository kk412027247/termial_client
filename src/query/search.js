import React from 'react';
import {connect} from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import {changeSearch} from '../actions/actions';
import {PropTypes} from 'prop-types';
import {fetchData, searchData, getTacForInfo} from '../actions/fetchActions.js'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Toggle from 'material-ui/Toggle';
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
    const {index, changeSearch, fetchData, searchData, getTacForInfo} = this.props;
    return(
      <div>
        <SwipeableViews
          index={index}
          //onChangeIndex={changeSearch}
        >
          <div className="searchInput">
            <Paper className="searchPaper">
              <TextField
                style={styles.search}
                hintStyle={styles.hint}
                inputStyle={styles.input}
                hintText='请输入TAC编码进行查询'
                underlineShow={false}
                onChange={getTacForInfo}
              />
              <IconButton
                touch={true}
                style={styles.iconButton}
                iconStyle={styles.icon}
              >
                <ActionSearch />
              </IconButton>
            </Paper>
          </div>
          <div className="searchInput">
            <Paper className="searchPaper">
              <TextField
                style={styles.search}
                hintStyle={styles.hint}
                inputStyle={styles.input}
                hintText='请输入：厂商 品牌 型号进行查询'
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
        </SwipeableViews>
        <Toggle
          defaultToggled={true}
          onToggle={changeSearch}
        />
      </div>
    )
  }
}

Search.propTypes = {
  index:PropTypes.number,
  changeSearch:PropTypes.func,
  fetchData:PropTypes.func,
  getTacForInfo:PropTypes.func,
  searchData:PropTypes.func,
};


const mapStateToProps = (state)=>({
  index:state.generalReducer.slideIndex,
});
const mapDispatchToProps = (dispatch)=>({
  changeSearch:(event,toggle)=>dispatch(changeSearch(toggle)),
  fetchData:(event, newValue)=> dispatch(fetchData(event, newValue)),
  getTacForInfo:(event, newValue)=> dispatch(getTacForInfo(event, newValue)),
  searchData: ()=> dispatch(searchData()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Search)
