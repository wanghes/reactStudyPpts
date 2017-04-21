/*
 * @file 主文件
 */

import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deskmark from 'components/Deskmark';
import rootReducer from 'reducers';
import * as actionCreators from 'actions';

import 'bootstrap.less';

// 创建一个带有中间件的store
const store = applyMiddleware(
  thunkMiddleware
)(createStore)(rootReducer);

// 创建一个基于Deskmark的状态根组件
const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

//创建一个基于DOM的容器
const container = document.body.appendChild(
  document.createElement('div')
);

// render root conponent with store to DOM container
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
