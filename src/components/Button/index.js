import React from 'react'

function Button({ op, handleClick })
{
  return <button onClick={handleClick}>{op}</button>
}

export default Button
