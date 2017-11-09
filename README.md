### 玛德用post的话 一定要用 一定更要转成JSON格式

### 最终还是放弃react-motion 组件，因为实在搞不定，api太TMD复杂，并且写出的代码太多。还是用回系自带的ReactCSSTransitionGroup;

#### ReactCSSTransitionGroup 结合 transition 分步变化可以搞很多负责的效果，因为本质上是css，所以还能跟keyframes一起用。ps 组件动画默认500ms记得。

### transparent 透明色

### 创建搜索索引，文本索引关键字是text
```
.createIndex({"厂商(中文)":"text", "品牌(英文)": "text"})
```
