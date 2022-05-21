import React, { useState } from 'react'
import style from "./todo.module.css"



const TodoItem = ({arr}) => {
  
  return (
    <div className={style.tododiv}>
        {arr.map((todos)=>(
            <div className={style.lborder}>
              <input type="checkbox" className={style.chinp} />
              <label for="checkbox">{todos.value}</label>
            </div> 
        ))}
    </div>
  )
}



export default TodoItem