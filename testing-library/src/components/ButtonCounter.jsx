import React from 'react'

function ButtonCounter({name,value=1, action}) {
    
  return (
    <button aria-label={name} onClick={() => action(value)}>
    {value}
  </button>
  )
}

export default ButtonCounter