import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import style from "./todo.module.css"

const Todo = () => {
    const [value,setValue]= useState("");
    const [todos,setTodos] = useState([]);

    const deleteItem=(id)=>{
      let newtodos=todos.filter((todo)=>todo.id !== id);
      setTodos(newtodos)
    };

  return (
    <div>
       
        <input className={style.inpbtn} placeholder='Write Something' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />

        <button className={style.inpbtn} onClick={()=>{
            setTodos([...todos,{ id:Date.now(),value:value}])
            setValue("")
        }} >Add</button>

        <div className={style.tododiv}>
          {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} deleteItem={deleteItem}/>
          ))}
        </div>
        
    </div>
  )
}

export default Todo