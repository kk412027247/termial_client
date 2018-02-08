import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './indicator.css';


class Indicator extends React.Component{

  constructor(props){
    super(props);
    
  }

  calculate = () => {
    console.log(this.refs.indicator.getBoundingClientRect().bottom);
    console.log(document.documentElement.clientHeight)
  };

  componentDidUpdate(){
    // 元素底部距离可视区域（浏览器）顶端的距离
    const positionY = this.refs.indicator.getBoundingClientRect().bottom;
    // 可视区域（浏览器）的高度
    const height =  document.documentElement.clientHeight;
    console.log(positionY , height);

    console.log(positionY < height);
    if(positionY < height){
      console.log('appear')
    }

  }

  showPosition = () => {console.log(this.refs.indicator.getBoundingClientRect().bottom)};

  componentDidMount(){

    window.addEventListener('scroll',this.showPosition)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.showPosition)
  }


  //todo 做个底部到底 来个按钮
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
