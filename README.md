### 笔记

#### 玛德用post的话 一定要用 一定更要转成JSON格式

#### 最终还是放弃react-motion 组件，因为实在搞不定，api太TMD复杂，并且写出的代码太多。还是用回系自带的ReactCSSTransitionGroup;

#### ReactCSSTransitionGroup 结合 transition 分步变化可以搞很多复杂的效果，因为本质上是css，所以还能跟keyframes一起用。ps 组件动画默认500ms记得。


进场组件如果带了高度，需要在外层加一层活动高度的盒子，因为带高度进场会令高度动画无效.
```
//定义了进场时的状态，高度是自带的。
.history-enter {
    height: 0;
    opacity:0;
}



//定义了进场过程的动画，就和:hover 差不多意思，进场结束后，转成 默认状态。以下动画部分可以用 animation 代替
.history-enter.history-enter-active {
    opacity:1;
    height: 180px;
    transition: 500ms ease-in;
    overflow:hidden;
}


//可以替换成以下形式
.history-enter {
    height: 160px;
}

.history-enter.history-enter-active {
    animation: 500ms rainbow 3 normal;
}


@keyframes rainbow {
    0% { background-color: yellow; }
    100% { background: blue; }
}


```


#### transparent 透明色

#### 创建搜索索引，文本索引关键字是text
```
.createIndex({"厂商(中文)": "text", "品牌(英文)": "text", "型号": "text", "上市时间(年月，格式：YYYYMM)": "text"})

显示所有索引
.getIndexes()


删除所有索引
.dropIndexes()

```

### 注意！！！用了defaultValue的时候，记得保持顶层组件的更新，否则会出现defaultValue无效

### 去除数组的重复成员
```
[...new Set(array)]
```


### withRouter 高阶组件,用props.push 来实现跳转
```
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
// redux包着的组件只能是这么复杂地包着。
// 用withRouter包了一层之后，dumb component就可以用history.push的方式操作了
// 因为把prop 全部传到了 内层，是的，这个高级组件包了两层
```

### react-router-redux 中的history必须要来自store的history，因为需要时同一个饮用，才能顺利的同步两个history，如果不是同一个，会出现url改变，但是不跳转；

```
import {history} from "../store";

```


### react-transition-group
需要在 CSSTransition 添加 'in' prop ，
并且不要把 把TransitionGroup 放在动态生成的组件中，TransitionGroup要检测，并给内层的CSSTransition动态添加'in'prop
