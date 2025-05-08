import React from 'react'
import './serchresult.css'
import ChildCard from './ChildCard'
const Results = ({data=[]}) => {
    console.log(data)
  return (
    <div className='result-container'>
        {data?.map((item)=>(
           <ChildCard
            key={item.id}
            name={item.name}
            />
        ))}
    </div>
  )
}

export default Results