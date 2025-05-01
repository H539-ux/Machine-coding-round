import React from 'react'
import './ProgressBar.css'
const ProgressBar = ({value=0,onPause,onResume,onRestart}) => {
  return (
    <div>
        <div className="progress">
            <div style={{transform: `translateX(${-100 + value}%)` }} className='runner'> 
              
            </div>
           <span className='value'> {value}%</span>
        </div>
       <button onClick={onPause}> Pause</button>
       <button onClick={onResume}> Resume</button>
       <button onClick={onRestart}> Restart</button>
    </div>
  )
}

export default ProgressBar