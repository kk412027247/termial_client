import React   from 'react';
import 'whatwg-fetch';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:'啥都没有',
      style:false,
      result:'',
      log:'还没登陆'
    }
  }
  componentDidMount(){
    fetch('http://192.168.1.205:3000')
      .then((res)=>res.json())
      .then((result)=>this.setState({result:JSON.stringify(result)})).catch((err)=>{console.log(err)})
  }

  render() {
    let _color= this.state.style ? {color:'red',backgroundColor:'#ccc'} : {color:'black'};
    return (
      <div>
        <button onClick={()=>{
          fetch('http://192.168.1.205:3000/sign',{credentials:'include'})
            .then((res)=>res.json())
            .then((result)=>this.setState({log:result}));
        }}>注册</button>

        <button onClick={()=>{
          fetch('http://192.168.1.205:3000/log',{credentials:'include'})
            .then((res)=>res.json())
            .then((result)=>this.setState({log:result}))
        }}>登陆</button>

        <button onClick={()=>{
          fetch('http://192.168.1.205:3000/logout',{credentials:'include'})
            .then((res)=>res.json())
            .then((result)=>this.setState({log:result}))
        }}>退出</button>

        <input type="text" onChange={(evt)=>{
          this.setState({text:evt.target.value});
        }}/>
        <button style={_color} onClick={()=>{
          this.setState({
            text:this.state.style ? this.state.text.replace('测试','') : this.state.text.concat('测试'),
            style: !this.state.style
          });
        }}>测试</button>
        <div className='showText'>
          {this.state.log}
          <br/>
          {this.state.text}
          <br/>
          {this.state.result}
        </div>
      </div>
    );
  }
}

export default App;

// todo 保存数据到sessionStorage
// sessionStorage.setItem('key', 'value');
//
// todo 从sessionStorage获取数据
// let data = sessionStorage.getItem('key');
//
// todo 从sessionStorage删除保存的数据
// sessionStorage.removeItem('key');
//
// todo 从sessionStorage删除所有保存的数据
// sessionStorage.clear();
