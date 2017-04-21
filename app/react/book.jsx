import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Book extends React.Component{
    constructor(props,context){
       super(props,context);
       this.state = {
            book:null
       }
       console.log(this.props);
    }
    componentDidMount(){
        let self = this;
        fetch("http://localhost:3000/book/"+this.props.params.bookID).then(function(res){
            res.json().then(function(result){
                console.log(result)
                self.setState({book:result});
            })
        });
    }
    render(){
        return (<div>
            <div><h1>current:book</h1>
            <Link to="/">home</Link>
            <br/>
            <Link to="/books">books</Link></div>
            <div style={{border:"1px solid #ccc", maxWidth:"300px", minHeight:"100px"}}>
                <div>{this.state.book ? this.state.book.name:""}</div>
                <div>{this.state.book ? this.state.book.author:""}</div>
                <div>{this.state.book ? this.state.book.publish:""}</div>
            </div>
        </div>)
    }
}

export default Book;