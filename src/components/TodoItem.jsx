import React, { useState } from 'react'
import style from "./todo.module.css"
import TodoList from "./TodoList.jsx"


let arr=[]
const TodoItem = ({todo,deleteItem,sendarr}) => {

  const [isCompleted,setIsCompleted]  = useState(false)
  // const [comptodo,setcomptodo] = useState([])  
  
  return (

        
            <div className={style.lborder} key={todo.id}>
              <input type="checkbox"
              className={style.chinp}
              checked={isCompleted}
              onChange={(e)=>{
                setIsCompleted(e.target.checked)
                // console.log(isCoplemted)
                if(!isCompleted){
                  arr.push(todo.value)
                  console.log(arr);
                  sendarr(arr)
                  deleteItem(todo.id)
                  
                }
               
              }}   />
              <label className={isCompleted ? style.striked :""}>{todo.value}</label>
              <button onClick={()=> deleteItem(todo.id)}>Delete</button>

              
            </div> 
            
            
  )
}



export default TodoItem