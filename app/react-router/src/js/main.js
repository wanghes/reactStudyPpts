import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router";

const ACTIVE = {color:"red"}; //定义激活常量
const boxLayout = {display:"flex",justifyContent:"center",  flexFlow: "column wrap", alignItems: "center"}; //布局页面
const ulStyle = {display:"flex"}
const liStyle = {display:"block",margin:"0 10px"}
const childrenBox = {width:"1000px",height:"500px",border:"1px solid #ccc", backgroundColor:"#f5f5f5"}
const Container = (props) =>{
    return (<div style={boxLayout}>
    <ul style={ulStyle}>
      <li style={liStyle}><Link      to="/"           activeStyle={ACTIVE}>根目录</Link></li>
      <li style={liStyle}><IndexLink to="/"           activeStyle={ACTIVE}>首页</IndexLink></li>
      <li style={liStyle}><Link      to="/users"      activeStyle={ACTIVE}>用户列表</Link></li>
      <li style={liStyle}><Link      to="/users/ryan" activeStyle={ACTIVE}>用户ryan</Link></li>
      <li style={liStyle}><Link      to={{ pathname: '/users/wanghes', query: { like: 'Dota' } }}
                                      activeStyle={ACTIVE}>用户wanghes</Link></li>
      <li style={liStyle}><Link      to="/about"      activeStyle={ACTIVE}>关于</Link></li>
    </ul>
    <div style={childrenBox}>{props.children}</div>
  </div>)
}
const Index = ()=>(
    <div><h1>首页</h1></div>
)
const About = ()=>(
    <div><h1>关于页面</h1></div>
)
const Users = ({ children }) => {
  console.log(children)
  return (
    <div>
      <h2 style={{color:"#fff",lineHeight:"60px",textAlign:"center",margin:0,backgroundColor:"#000"}}>用户</h2>
      {children}
    </div>
  );
}
const UsersIndex = ()=> (
    <div style={{display:'flex',flexFlow:"column wrap", padding:"10px"}}>
        <Link style={{color:'#000',textDecoration:"none",lineHeight:"32px"}} to="/users/付明乐" activeStyle={ACTIVE}>付明乐</Link>
        <Link style={{color:'#000',textDecoration:"none",lineHeight:"32px"}}   to="/users/赵志广" activeStyle={ACTIVE}>赵志广</Link>
    </div>
);

const user = (props)=>(
    <div>
        <h3>用户名: {props.params.name}</h3>
    </div>
);
const UserQuery = (props) => {
    console.log(props);
    return (
      <div>
        <h3>用户名: {props.params.name} {props.location.query.like?"爱好："+ props.location.query.like:''}</h3>
      </div>
    );
}

const App = ()=>(
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Index} />
          <Route path="about" component={About}/>
          <Route path="users" component={Users}>
               <IndexRoute component={UsersIndex} />
               <Route path=":name" component={UserQuery} />
               <Route path="/:name?foo=bar" component={UserQuery} />
          </Route>
        </Route>
    </Router>
);


ReactDOM.render(<App />,document.querySelector('#root'));