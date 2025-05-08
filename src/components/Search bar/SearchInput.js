import React from 'react'
import { useState } from 'react'

const SearchInput = ({onSearch,onFocus,onBlur}) => {
const [name,setName] = useState("")


const handleChange=(e)=>{
    const value = e.target.value
    setName(value);
    onSearch(value);
}
  return (
    <>
      <label>search </label>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        type='text'
        value={name}
        onChange={handleChange}
      />
    </>
  )
}

export default SearchInput