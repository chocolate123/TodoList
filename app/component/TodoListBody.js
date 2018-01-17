import React,{Component} from "react";
import TodoListItem from "./TodoListItem";
import {doneTodo,unDoneTodo} from "./tool/Tool";
export default class TodoListBody extends Component{
    constructor({todos,setTodoList}){
        super();
    }
    changDoneTodoList(id,done){
        this.props.setTodoList(this.props.todos.map((item,index)=>{
            if(item.id!=id){
                return item;
            }
            return {
                ...item,
                done
            }
        }))
    }
    deleteTodoList(id){
        this.props.setTodoList(this.props.todos.filter((item,index)=>{
            if(item.id!=id){
                return item
            }
        }))
    }
    render(){
        const {todos}=this.props;
        return <div>
            <div className="wrap">
            <p className="doing"><span>正在进行</span><span>{unDoneTodo(todos).length}</span></p>
                {
                    todos.map((item,index)=>{
                        if(!item.done){
                            return <TodoListItem key={index}
                                                  item={item}
                                                  changDoneTodoList={this.changDoneTodoList.bind(this)}
                                                  deleteTodoList={this.deleteTodoList.bind(this)}></TodoListItem>
                        }
                       
                    })
                }
                <p className="done"><span>已经完成</span><span>{doneTodo(todos).length}</span></p>
                {
                    todos.map((item,index)=>{
                        if(item.done){
                            return <TodoListItem key={index}
                            item={item} 
                            changDoneTodoList={this.changDoneTodoList.bind(this)}
                            deleteTodoList={this.deleteTodoList.bind(this)}></TodoListItem>
                        }
                       
                    })
                }
                
            </div>
        </div>
    }
}