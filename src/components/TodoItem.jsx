import React, { useState } from 'react'
import style from "./todo.module.css"


const TodoItem = ({arr}) => {
    const [borcol,setBorcol]=useState("7px solid teal")
  return (
    <div className={style.tododiv}>
        {arr.map((todos)=>(
            <p className={style.lborder}><span style={{border:borcol}} onClick={()=>{
                setBorcol("7px solid orangered")
            }}></span>{todos.value}</p> 
        ))}
    </div>
  )
}



export default TodoItem