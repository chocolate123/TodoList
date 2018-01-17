import React,{Component} from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./TodoListBody";
export default class App extends Component{
    constructor(){
        super();
        this.state={
            todos:[
                {"id":1,"title":"吃饭","done":true},
                {"id":2,"title":"睡觉","done":false},
                {"id":3,"title":"学习","done":false}
            ]
        }
    }
    setTodoList(todos){
        this.setState({
            todos
        })
    }
    render(){
        return <div>
            <TodoListHeader todos={this.state.todos}
                            setTodoList={this.setTodoList.bind(this)}></TodoListHeader>
            <TodoListBody todos={this.state.todos}
                          setTodoList={this.setTodoList.bind(this)}></TodoListBody>
        </div>
    }
}