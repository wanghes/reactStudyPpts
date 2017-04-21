// 首先定义一个改变数据的plain函数，成为reducer
function count (state, action) {
    var defaultState = {
        year: 2015,
      };
    state = state || defaultState;
    switch (action.type) {
        case 'add':
            return {
                year: state.year + 1
            };
        case 'sub':
            return {
                year: state.year - 1
            }
        default :
            return state;
    }
}

// store的创建
var createStore = require('redux').createStore;
var store = createStore(count);

// store里面的数据发生改变时，触发的回调函数
store.subscribe(function () {
    document.querySelector('#textId').value ='the year is: '+store.getState().year
});

// action: 触发state改变的唯一方法(按照redux的设计思路)
var action1 = { type: 'add' };
var action2 = { type: 'add' };
var action3 = { type: 'sub' };

document.querySelector('#add').onclick = function(){
    store.dispatch(action1)
}
document.querySelector('#sub').onclick = function(){
    store.dispatch(action3)
}
window.onload = function(){
    document.querySelector('#textId').value ='the year is: '+store.getState().year
}