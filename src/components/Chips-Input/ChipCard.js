import React from 'react'
import './ChipCard.css'
function ChipCard({name="study",onRemove}) {
  return (
    <div className='card-container'>
          <div>{name}</div>
          <span onClick={onRemove}>X</span>
    </div>
  )
}

export default ChipCard