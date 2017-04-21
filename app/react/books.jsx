import React from "react";
import ReactDOM from 'react-dom';
import { Link,hashHistory } from 'react-router';

class EachOneBook extends React.Component {
    constructor(props,context){
        super(props,context);
        this.handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        this.props.handleClick(this.props.one.id);
    }
    render(){
        return(
        <li >
        <a onClick={this.handleClick} href="javascript:;">{this.props.one.name}</a>
        </li>
        )
    }
}
class Books extends React.Component{
    constructor(props,context){
       super(props,context);
       this.state = {
            lists:[]
       }
       this.generateLists = this._generateLists.bind(this);
       this.handleHref = this._handleHref.bind(this);
        console.log(this.props.children)
    }
    componentDidMount(){

        let self = this;
        fetch("http://localhost:3000/books").then(function(res){
            res.json().then(function(result){
                self.setState({lists:result});
            })
        });
    }
    _handleHref(id){
        hashHistory.push('/book/'+id);
    }
    _generateLists(){
        return (<ul>
            {this.state.lists.map((item) =>
                <EachOneBook key={item.id} handleClick={this.handleHref} one={item}/>
              )}
        </ul>)
    }
    render(){
        return (<div>
            <div>
            <h1>current:books</h1>
            <Link to="/">home</Link>
            </div>
            {this.generateLists()}
            {this.props.children}
        </div>);
    }
}

export default Books;