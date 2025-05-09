import React from 'react'
import Item from './Item'
import { useState } from 'react';

const TodoListHome = () => {
  const [value,setValue] = useState("");
  const [list,setList] = useState([]);
  const handleClick = ()=>{
    if(value.trim() == "") return
    const data = {
        id:Date.now(),
        name:value,
        completed:false
    }
    setList((prev)=>[...prev,data])

    setValue("");
  }

  const onDelete =(id)=>{
    setList((prev)=>prev.filter((item)=> item.id !== id))
  }
  const onCheck=(id)=>{
       setList((prev)=> prev.map((item)=> item.id===id?{...item,completed:!item.completed}:item))
  }
  return (
    <div>
       
       <input
        placeholder='enter'
        value = {value}
        onChange={(e)=>setValue(e.target.value)}
       />
       <button onClick={handleClick}>add</button>

        {list.map((item,index)=>(
           <Item
             key={item.id}
             item={item}
             handledelete={()=>onDelete(item.id)}
             check ={()=>onCheck(item.id)}
           />
        ))}

    </div>
  )
}

export default TodoListHome