import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
//import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




import './main.css';


let i = 1;



class Query extends Component {
  state = {
    drawer:false,
    snackbar:false,
    snackbarMessage: '',
    input:'',
    dialog: false,
    data:[],
    fetching: false,
  };

  handleFetch = () => {
    fetch('http://127.0.0.1:3001/query',{
      method:'post',
      headers:{'Content-Type':'application/json'} ,
      body:JSON.stringify({'query':this.state.input})
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.length === 0) {
        this.setState({
          snackbarMessage: '没有匹配信息，请更新关键字',
          snackbar: true,
        })}
      this.setState({data: result});
      console.log(this.state.data)
    })
    .catch(err=>{
       console.log(err)
    })
  };

  handleDrawer = () => this.setState({drawer: !this.state.drawer});

  handleInput = (event, newValue) => {
    this.setState({
      input: newValue.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' '),
    });
    const check =  ++i;
    // console.log(check);
    // console.log(i);
    fetch('http://127.0.0.1:3001/query',{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      //玛德用post的话 一定要用 一定更要转成JSON格式
      body:JSON.stringify({"query":newValue.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ')})
    })
    .then(res=>res.json())
    .then(result=>{

       // console.log(check);
       // console.log(i);
      if(check === i) {
        this.setState({data: result});
        result.forEach(item=>console.log(item));
      }else{console.log('数据返回慢了，放弃这个数据')}

    })
    .catch(err=>{
      console.log(err);
    })
  };


  handleDialog = () => {this.setState({dialog: !this.state.dialog})};

  render() {
    return (
      <div>
        <header>
          <AppBar
            title="终端信息库"
            iconElementRight={<IconButton iconClassName="material-icons">more</IconButton>}
            onLeftIconButtonTouchTap={this.handleDrawer}
            style={{backgroundColor: '#1976D2', height: '70px',display: 'flex', alignItems: 'center'}}
          />
          <Drawer
            open={this.state.drawer}
            docked={false}
            onRequestChange={(open)=>this.setState({drawer: open})}
            
          >
            <AppBar
              iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
              onLeftIconButtonTouchTap={this.handleDrawer}
              style={{backgroundColor: '#1976D2'}}
            />
            <MenuItem><Link to="/" style={{display:'flex'}}>查询数据</Link></MenuItem>
            <MenuItem><Link to="/add" style={{display:'flex'}}>新增数据</Link></MenuItem>
            <MenuItem>新增数据</MenuItem>
            <MenuItem>删除数据</MenuItem>

          </Drawer>
        </header>
        
        <div id="main">
          <div className="searchInput">
            <Paper className="searchPaper">
              <TextField
              style={{display:'flex',flex: 0.8}}
              hintStyle={{fontSize: '25px'}}
              inputStyle={{fontSize: '25px'}}
              hintText='输入手机型号或品牌进行搜索，多个关键词请用空格隔开'
              underlineShow={false}
              onChange={this.handleInput}
              />
              <IconButton
                label="搜索"
                onClick={this.handleFetch}
              >
                <ActionSearch />
              </IconButton>

            </Paper>
          </div>
          <Divider/>
          <br/>
          <Paper className="show">
            <AppBar
              title="显示数据"
              style={{backgroundColor: '#00BCD4'}}
              iconElementLeft={<IconButton iconClassName="material-icons">language</IconButton>}
            />

            <Table multiSelectable={true} fixedHeader={true}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>厂商</TableHeaderColumn>
                  <TableHeaderColumn>品牌</TableHeaderColumn>
                  <TableHeaderColumn>价格</TableHeaderColumn>
                  <TableHeaderColumn>上市时间</TableHeaderColumn>
                  <TableHeaderColumn>双卡双待</TableHeaderColumn>
                  <TableHeaderColumn>系统</TableHeaderColumn>
                  <TableHeaderColumn>网络</TableHeaderColumn>
                  <TableHeaderColumn>CSFB</TableHeaderColumn>
                  <TableHeaderColumn>FR</TableHeaderColumn>
                  <TableHeaderColumn>FR</TableHeaderColumn>
                  <TableHeaderColumn>更多信息</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.state.data.map((item,index)=>(
                  <TableRow key={item["_id"]}>
                    <TableRowColumn >{item['厂商']}</TableRowColumn>
                    <TableRowColumn >{item[ "品牌(英文)"]}</TableRowColumn>
                    <TableRowColumn >{item["价格"]}</TableRowColumn>
                    <TableRowColumn >{item["上市时间"]}</TableRowColumn>
                    <TableRowColumn >{item["SIM卡"]}</TableRowColumn>
                    <TableRowColumn >{item["操作系统"]}</TableRowColumn>
                    <TableRowColumn >{item["网络制式"]}</TableRowColumn>
                    <TableRowColumn >{item["CPU数量"]}</TableRowColumn>
                    <TableRowColumn >{item["ROM容量"]}</TableRowColumn>
                    <TableRowColumn >{item["后置摄像头"]}</TableRowColumn>
                    <TableRowColumn >{item["电池容量"]}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

             <Dialog
              title="详细信息"
              actions={[<RaisedButton label="更改"/>,<RaisedButton label='再更改' style={{marginLeft: '30px'}}/>]}
              open={this.state.dialog}
              modal={false}
              onRequestClose={this.handleDialog}
             >
               xxx <br/>  xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/> xxx <br/>
             </Dialog>
            <LinearProgress/>
          </Paper>







        </div>

        





        <footer>
          <Snackbar
            open={this.state.snackbar}
            message={this.state.snackbarMessage}
            onRequestClose={()=>this.setState({snackbar: false})}
          />
        </footer>

      </div>
    );
  }
}


const Add = ()=>(
  <div>
    Add
    <ul>
      <li><Link to="/">查询数据</Link></li>
      <li><Link to="/add">新增数据</Link></li>
    </ul>
  </div>
);



const App = () =>(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Query}/>
      <Route path="/add" component={Add}/>
    </div>
  </BrowserRouter>
);


export default App;
