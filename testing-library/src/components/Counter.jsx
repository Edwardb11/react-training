import React, { useState } from 'react'

const Counter = () => {
    const [conter,setCounter]= useState(0)
  return (
  <>
  <h2>Counter: {conter}</h2>
  </>
  )
}

export default Counter