title: ReactJS
speaker: wanghes
url: https://github.com/wanghes
transition: vertical3d
theme: moon
usemathjax: yes

[slide data-transition="kontext"]
#概要 {:&.flexbox.vleft}
 <small style="vertical-align:middle;display:inline-block"><iframe src="http://ghbtns.com/github-btn.html?user=wanghes&repo=React_Flux&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe><iframe src="http://ghbtns.com/github-btn.html?user=wanghes&repo=React_Flux&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe><iframe src="http://ghbtns.com/github-btn.html?user=wanghes&repo=React_Flux&type=follow&count=false" allowtransparency="true" frameborder="0" scrolling="0" width="170" height="20" style="width:170px;height:20px;  background-color: transparent;"></iframe></small>
----
* ### 本次分享首先介绍前端开发的从前到后的一套流程。 {:&.rollIn}
* ### 其中主要介绍时下比较流行的js框架
* Reactjs,包括webpack构建react应用；
* es6在React中的运用；
* react的jsx语法；
* react-router运用；
* 单项数据流flux管理组件state【为了加深对flux的理解，我们会制作一个todoList】；
* redux，redux封装了flux到store,store包裹了reducer，通过action机制触发reducer,然后reducer返回新的state数据，state改变，从而触发组件的更新；
* redux不依赖于react。。。


[slide data-transition="circle"]
{:&.flexbox.vleft}
## 1.前沿的语言
    **ES6**
    **typescript**
    **babel**
[slide data-transition="kontext"]{:&.flexbox.vleft}
## 2.前端流行的UI框架
    bootstrap,secmentUI,fundation,onSen...;
[slide data-transition="circle"]{:&.flexbox.vleft}
## 3.js框架
    react,angularjs,vuejs,emberjs,backbonejs;
[slide data-transition="kontext"]
<h1 style="text-align:left;">4.服务与包管理器</h1>
----
* nodejs(在前端利用其进行首屏直出) {:&.rollIn}
* 包管理工具一：npm
* 包管理工具二：yarn(适用于多人开发,兼容npm和Bower工作流,支持缓存下载的每一个包和并行操作,许在没有互联网连接的情况下安装)
[slide data-transition="circle"]
<h1 style="text-align:left;">5.前端模块开发</h1>
----
* 通用模块方案：umd[(function(a,b){})(a,b)] {:&.rollIn.flexbox.vleft}
* 异步加载模块：amd[requirejs]
* 懒加载模块：cmd[seajs]
* commonjs模块：nodejs的模块
[slide data-transition="horizontal3d"]
<h1 style="text-align:left;">6.简要介绍前端开发构建工具</h1>
----
* [grunt](http://www.gruntjs.net) {:&.rollIn.flexbox.vleft}
* [gulp](http://www.gulpjs.com.cn/)
* [rollupjs](http://rollupjs.org/),[配置更简单](http://www.tuicool.com/articles/iai2YbI)
* [webpack](http://webpack.github.io/),[china官网](https://doc.webpack-china.org/)
[slide data-transition="zoomout"]{:&.flexbox.vleft}
## 7.设计模式
    pubsub模式：一个PubSub模型主要方法有3个，订阅，退订，发布(EventEmitter)
[slide data-transition="zoomin"] {:&.flexbox.vleft}
## 8._React_主要环节之jsx,虚拟dom
[slide data-transition="zoomin"] {:&.flexbox.vleft}
## 9._React_主要环节之的Lifecycle生命周期大纲
    ```html
        + 首次实例化
        getDefaultProps
        getInitialState
        componentWillMount
        render
        componentDidMount
        + 实例化完成后的更新
        getInitialState
        componentWillMount
        render
        componentDidMount
        +存在期(组件已存在时的状态改变)
        componentWillReceiveProps
        shouldComponentUpdate
        componentWillUpdate
        render
        componentDidUpdate
        + 销毁&清理期
        componentWillUnmount
        ```
[slide data-transition="zoomin"] {:&.flexbox.vleft}
## 10._React_主要环节之合理的使用state,props(状态组件和非状态组件:react-weui,ant-design)
    【http://www.tuicool.com/articles/AzQzEbq】

[slide data-transition="zoomin"] {:&.flexbox.vleft}
## 11._React_主要环节之数据流(flux,redux,react-redux,react-router-redux..)
    [https://github.com/wanghes/React_Flux](https://github.com/wanghes/React_Flux)
    [http://facebook.github.io/flux/](http://facebook.github.io/flux/)
[slide data-transition="zoomin"]
    ![](/img/20160823164658810.png)
[slide data-transition="slide"]
    ![](/img/asas.png)
[slide data-transition="zoomin"]
   ![](/img/bg2016091802.jpg)
[slide data-transition="zoomin"] {:&.flexbox.vleft}
## 12._React_主要环节之周边git库
    - classNames
    - webpack:style.module
    - ajax->fetch->isomorphic-fetch
    - object-assign(immutable.js)
[slide data-transition="kontext"]{:&.flexbox.vleft}
## 13.react参考文章以及学习资源
 [https://facebook.github.io/react/](https://facebook.github.io/react/)
 [https://github.com/facebook/react-native](https://github.com/facebook/react-native)
 [https://github.com/reactjs/redux](https://github.com/reactjs/redux)
 [https://github.com/wanghes/React-1](https://github.com/wanghes/React-1)
 [https://github.com/wanghes/react-2](https://github.com/wanghes/react-2)
 [https://github.com/kdchang/reactjs101](https://github.com/kdchang/reactjs101)
 [http://www.ruanyifeng.com/blog/2015/03/react.html](http://www.ruanyifeng.com/blog/2015/03/react.html)
 [https://mobile.ant.design/](https://mobile.ant.design/)
 [https://github.com/dvajs/dva](https://github.com/dvajs/dva)
 [http://www.cnblogs.com/luozhihao/p/5660496.html](http://www.cnblogs.com/luozhihao/p/5660496.html)


[slide data-transition="kontext"]
## 14.BLOG
----
* [My blog1](http://blog.mousebird.cn/) {:&.rollIn}
* [My blog2](http://code.mousebird.cn/)
* [My blog3](http://mousebird.cn/)

 [slide data-transition="kontext"]
 #### 谢谢参与