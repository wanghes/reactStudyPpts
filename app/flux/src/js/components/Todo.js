import React from "react";
import {render} from "react-dom";
import assign from 'object-assign'
import EventEmitter from 'events';
import { Dispatcher } from 'flux';


const TodoStore = assign({},EventEmitter.prototype,{
    todos:[
        {id:Math.ceil(Math.random()*100000000),content:"1111111111"},
        {id:Math.ceil(Math.random()*100000000),content:"22222222222222"}
    ],
    getAll(){
        return this.todos;
    },
    deleteTodo(id){
        this.todos = this.todos.filter(item=>item.id!==id)
    },
    addTodo(todo){
        this.todos.push(todo);
    },
    emitChange() {
        this.emit('change');
    },
});


let AppDispatcher = new Dispatcher();

const  TodoAction = {
    create(todo){
        AppDispatcher.dispatch({
            actionType:"create_todo",
            todo
        });
    },
    delete(id){
        AppDispatcher.dispatch({
            actionType:"delete_todo",
            id
        });
    }
}

AppDispatcher.register((action)=>{
    switch(action.actionType){
        case "create_todo":
        TodoStore.addTodo(action.todo);
        TodoStore.emitChange();
        break;
        case "delete_todo":
        TodoStore.deleteTodo(action.id);
        TodoStore.emitChange();
    }
})

let textStyle = {height:"80px", width:"470px",margin:"15px auto",display:"block",resize: "none",marginBottom:"15px",
                    border:"1px solid #dfdfdf",boxShadow:"1px 2px 3px #dfdfdf inset",borderRadius:"3px"};

let lis = {listStyle:'none',margin:"5px"};
let mes = {border:"1px solid rgb(239, 120, 120)",backgroundColor:"rgb(239, 120, 120)",color:"#fff",fontSize:"14px",padding:"5px 10px",display:"none"};

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:TodoStore.getAll(),
            text:"hello world"
        }
        this.deleleTodo = this.deleleTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.setText = this.setText.bind(this);
    }
    deleleTodo(id){
        TodoAction.delete(id);
    }
    createTodo() {
        if(this.refs.myTextInput.value==""){
            this.refs.mes.style.display = "inline-block";
            return;
        }
        TodoAction.create({
            id: Math.ceil(Math.random()*100000000),
            content: this.refs.myTextInput.value
        });
        this.refs.myTextInput.value = "";
    }
    onChange(){
        this.setState({
            todos:TodoStore.getAll()
        });
    }
    setText(){
        this.refs.mes.style.display = "none";
        this.setState({
            text:this.refs.myTextInput.value
        });
    }
    componentDidMount(){
        let self = this;
        TodoStore.on("change",function(){
            self.onChange();
        })
    }
    componentWillUnmount(){
         let self = this;
        TodoStore.removeListener('change',function(){
            self.onChange();
        })
    }
    render(){
        let itemList = this.state.todos.map(item => (
            <li style={lis} key={item.id}>
              <button onClick={() => { this.deleleTodo(item.id); }}>删除</button>
              <span>{item.content}</span>
            </li>
          ));
        return (
            <div className="root">
                <header><h2>这是今天的待办事项</h2></header>
                <section className="main">
                     <ul>
                        {itemList}
                    </ul>
                    <div id="form">
                        <textarea style={textStyle} ref="myTextInput" onInput={this.setText}></textarea>
                        <button  onClick={this.createTodo}>创建一条消息</button><span style={mes} ref="mes">请填写todo信息</span>
                    </div>
                </section>

            </div>
        )
    }
}

export default Todo;