import React,{useState} from 'react'
import './ChipHome.css'
import ChipCard from './ChipCard'
const ChipHome = () => {
 
 const [data,setData] = useState([]);
 const [name,setName] = useState("");


  const handleClick = ()=>{
    setData((prev)=>{return [...prev,name]})
    setName("");
  }

  const handleRemove = (id)=>{
    setData((prev)=>{return prev.filter((item,index)=> index!==id)})
  }
  return (
    <div className='chipsContainer'>
        <label>Type</label>
        <input type='text' 
         placeholder='type'
         value={name}
         onChange={(e)=>{setName(e.target.value)}}
        
        />
        <button onClick={handleClick}>add</button>
      
    <div className="cards">
        {
            data?.map((item,index)=>(
                <ChipCard
                 key={index}
                 name={item}
                 onRemove={()=>handleRemove(index)}
                />
            ))
        }

    </div>
       

    </div>
  )
}

export default ChipHome