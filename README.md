### 笔记

#### 玛德用post的话 一定要用 一定更要转成JSON格式

#### 最终还是放弃react-motion 组件，因为实在搞不定，api太TMD复杂，并且写出的代码太多。还是用回系自带的ReactCSSTransitionGroup;

#### ReactCSSTransitionGroup 结合 transition 分步变化可以搞很多复杂的效果，因为本质上是css，所以还能跟keyframes一起用。ps 组件动画默认500ms记得。

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
