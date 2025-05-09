import React from 'react'
import './item.css'
const Item = ({item={},handledelete=()=>{},check}) => {
  return (
    <div className='item-container'>
        <input type='checkbox' checked={item.completed===true} onChange={check} />
        <span className={`${item.completed? "text":""}`}>{item.name}</span>
        <button onClick={handledelete}>Delete</button>
    </div>
  )
}

export default Item