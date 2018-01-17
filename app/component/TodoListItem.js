import React,{Component} from "react";
export default class TodoListItem extends Component{
    constructor({item,changDoneTodoList,deleteTodoList}){
        super();
    }
    render(){
        const {item,changDoneTodoList,deleteTodoList} = this.props;
        return <div>
            <div className="wrap">
                <input type="checkbox" checked={item.done}
                       onChange={(e)=>{changDoneTodoList(item.id,e.target.checked)}}/>
                <span>{item.title}</span>
                <button onClick={()=>{deleteTodoList(item.id)}}>删除</button>
            </div>
        </div>
    }
}