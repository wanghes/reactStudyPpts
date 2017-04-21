import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute ,Route, Link, browserHistory,hashHistory } from 'react-router'


import Container from './container.jsx';
import Books from './books.jsx';
import Book from './book.jsx';

const Index = ()=>(
    <div><h1>Index page</h1><Link to="/books">books</Link></div>
)

const childInede = ()=>(
    <div><h1>childInede</h1></div>
)


const RouteWrap = () =>(
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Index}/>
          <Route path="/books" component={Books}>
            <Route path="aa" component={childInede}/>
          </Route>
          <Route path="/book/:bookID" component={Book}/>
        </Route>
  </Router>
);

ReactDOM.render(<RouteWrap />, document.getElementById('app'))