import React, { useRef } from "react";

const Ref = () => {
  //funcionan como el id en js
  const ref = useRef(null);

  const handleRef = () => {
    ref.current.value = "Hola mundo desde React";
    ref.current.select();
    console.log(ref);
  };

  return (
    <>
      <h1 onClick={handleRef}>useRef</h1>
      <hr />
      <textarea ref={ref} placeholder="Escribe un mensaje..."></textarea>
    </>
  );
};

export default Ref;
