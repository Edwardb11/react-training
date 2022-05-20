import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');

  const peticion = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=TlD4jwNraHpTsPCwcSYEHyYJNNf2pSnBnq3mgDEjmkQ"
    );
    const data = await res.json();
    // console.log(data);
    setImages(data);
  };
  useEffect(() => {
    peticion();
  });
const handleSubmit =(e)=>{
  e.preventDefault()
const text =e.target[0].value;
setInput(text)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="busqueda"> Buscar <input type='text'  name='busqueda'/></label>
    </form>
    <hr/>
      {images.map((img) => {
        return <Card key={img.id} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
