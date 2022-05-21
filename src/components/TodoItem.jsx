import React, { useState } from 'react'
import style from "./todo.module.css"



const TodoItem = ({todo,deleteItem}) => {

  const [isCompleted,setIsCompleted]  = useState(todo.isCompleted)
  
  
  return (

          
            <div className={style.lborder} key={todo.id}>
              <input type="checkbox"
              checked={isCompleted}
              onChange={(e)=>{
                setIsCompleted(e.target.checked)
              }}  className={style.chinp} />
              <label className={isCompleted ? style.striked :""}>{todo.value}</label>
              <button onClick={()=> deleteItem(todo.id)}>Delete</button>
            </div> 
       
  )
}



export default TodoItem