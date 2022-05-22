import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import style from "./todo.module.css"

const Todo = () => {
    const [value,setValue]= useState("");
    const [todos,setTodos] = useState([]);
    const [carr,setcarr1]=useState([])

    const deleteItem=(id)=>{
      let newtodos=todos.filter((todo)=>todo.id !== id);
      setTodos(newtodos)
    };
    const sendarr=(arr)=>{
      setcarr1(arr)
      console.log(carr)
    }
    

  return (
    <div>
       
        <input className={style.inpbtn} placeholder='Write Something' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />

        <button className={style.inpbtn} 
        disabled={!value}
        onClick={()=>{
            setTodos([...todos,{ id:Date.now(),value:value}])
            setValue("")
        }} >Add Todo</button>

        <div className={style.tododiv}>
          {todos.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} deleteItem={deleteItem} sendarr={sendarr}/>
          ))}
          <TodoList arr={carr} key={carr.id}/>
        </div>
        
    </div>
  )
}

export default Todo