import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import style from "./todo.module.css"

const Todo = () => {
    const [value,setValue]= useState("");
    const [todos,setTodos] = useState([]);

  return (
    <div>
       
        <input className={style.inpbtn} placeholder='Write Something' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />

        <button className={style.inpbtn} onClick={()=>{
            setTodos([...todos,{value:value}])
            // console.log(todos)
            setValue("")
        }} >Add</button>

        <TodoList arr={todos} value={value}/>
    </div>
  )
}

export default Todo