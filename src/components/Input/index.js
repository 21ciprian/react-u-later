import React from 'react'

function Input({ handleChange, value })
{
  return <input onChange={handleChange} type='number' value={value} />
}

export default Input
