import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './indicator.css';


class Indicator extends React.Component{
  

  calculate = () => {
    console.log(this.refs.indicator.getBoundingClientRect().bottom);
    console.log(document.documentElement.clientHeight)
  };

  componentDidUpdate(){
    //设置一下延时，等UI组件运动完毕之后再获取
    setTimeout(()=>{
      // 元素底部距离可视区域（浏览器）顶端的距离
      const positionY = this.refs.indicator.getBoundingClientRect().bottom;
      // 可视区域（浏览器）的高度
      const height =  document.documentElement.clientHeight;
      if(positionY < height){
        console.log('indicator appear')
      }
    },510)
  }

  showPosition = () => {
    const positionY = this.refs.indicator.getBoundingClientRect().bottom;
    const height =  document.documentElement.clientHeight;
    if(positionY < height){
      console.log('scroll appear')
    }
  };

  componentDidMount(){
    window.addEventListener('scroll',this.showPosition)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.showPosition)
  }


  // 和app获取历史记录逻辑类似，画到底部，获取新的数据
  render(){
    // 可视区域（浏览器）的高度
    return(
      <div className={'indicator'} ref={'indicator'}>
        <button
          onClick={this.calculate}
        >
          测试
        </button>
        <CircularProgress/>
      </div>

    )
  }
}


export default Indicator;
