import React, { useState } from 'react'

const Counter = () => {
    const [conter,setCounter]= useState(0)

    const handleAdd = () => {
        setCounter(Counter+1)
    }
  return (
  <>
  <h2>Counter: {conter}</h2>
  <button onClick={handleAdd}>+1</button>
  <button>-1</button>
  </>
  )
}

export default Counter