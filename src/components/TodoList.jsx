import style from "./todo.module.css"
import React from 'react'

const TodoList = ({arr}) => {
  return (
    <div>
        <div><h2 className={style.heading}>Show Completed To-Do's</h2></div>
        {arr.map((elem)=>(
            <div  className={style.ctodo} >
                <p className={style.striked}>{elem}</p>
            </div>
            
        ))}
        
    </div>
  )
}

export default TodoList