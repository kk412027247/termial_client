
let i = 1;

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
