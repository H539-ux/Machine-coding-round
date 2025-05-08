import React from 'react'
import './childcard.css'
const ChildCard = ({name}) => {
  console.log(name)
  return (
    <div className='child'>
        <span>{name}</span>
    </div>
  )
}

export default ChildCard