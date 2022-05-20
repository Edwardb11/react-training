import React, { useState, useEffect } from 'react'
import Card from './Card'

const Cards = () => {
const [images, setImages] = useState({})

const peticion = async () => {
const res= await fetch('https://api.unsplash.com/photos/random/?client_id=TlD4jwNraHpTsPCwcSYEHyYJNNf2pSnBnq3mgDEjmkQ')
const data = await res.json()
// console.log(data)
setImages(data.urls.regular)
}
useEffect(() => {
    peticion();
},[])

  return (
   <>
   <Card/>
   </>
  )
}

export default Cards