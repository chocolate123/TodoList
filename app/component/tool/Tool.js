export const doneTodo = (todos)=>{
    return todos.filter((item,index)=>{
        return item.done
    })
}
export const unDoneTodo = (todos)=>{
    return todos.filter((item,index)=>{
        return !item.done
    })
}