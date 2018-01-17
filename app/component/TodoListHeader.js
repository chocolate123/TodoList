import React,{Component} from "react";
export default class TodoListHeader extends Component{
    constructor({todos,setTodoList}){
        super();
    }
    
    addTodoList(title){
        const {todos,setTodoList} = this.props;
        setTodoList([...todos,{
            id:todos.reduce((a,b)=>{
                return a.id>b.id?a:b
            }).id+1,
            title,
            done:false
        }])
    }
    render(){
        return <div>
            <div className="myHeader" ref="addList">
                <div className="wrap">
                    <span>chocolate的TodoList</span>
                    <input type="text"/>
                </div>
            </div>
        </div>
    }
    componentDidMount(){
        var self =this;
       $(this.refs.addList).delegate("input","keypress",function(e){
            if(e.keyCode==13){
                self.addTodoList(e.target.value);
                e.target.value="";
            }
       })
    }
}