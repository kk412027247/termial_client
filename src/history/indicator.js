import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import './indicator.css';
import {getHistory} from '../actions/historyActions';

class Indicator extends React.Component{

  loadMore = () => {
    if(!!this.refs.indicator){
      // 元素底部距离可视区域（浏览器）顶端的距离
      const positionY = this.refs.indicator.getBoundingClientRect().bottom;
      // 可视区域（浏览器）的高度
      const height =  document.documentElement.clientHeight;
      // 在指示器还有100像素就出现的时候，加载下一部分的数据。
      if(positionY < height + 100){
        //console.log('indicator appear');
        this.props.getHistory()
      }
    }else{
      this.props.getHistory();
    }

  };
  componentDidUpdate(){
    //设置一下延时，等UI组件运动完毕之后再获取位置数据
    setTimeout(this.loadMore,600)
  }

  //组件加载完毕的时候，给浏览器对象增加一个监听滚动的事件
  componentDidMount(){
    window.addEventListener('scroll',this.loadMore)
  }

  //组件卸载的时候，把监听的事件取消
  componentWillUnmount(){
    window.removeEventListener('scroll',this.loadMore)
  }

  render(){
    const {stopLoading} = this.props;
    return(
      <div className={'indicator'} ref={'indicator'}>
        {
          !stopLoading ?
          <CircularProgress/> :
          <div>所有数据加载完毕</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stopLoading:state.historyReducer.stopLoading,
  loading:state.historyReducer.loading,
  //history 属性的引入只是为了 可以刷新该组件
  history:!state.historyReducer.cache?
    state.historyReducer.history: state.historyReducer.history.filter(history =>!!history.cache),
});

const mapDispatchToProps = dispatch => bindActionCreators({getHistory},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Indicator);
