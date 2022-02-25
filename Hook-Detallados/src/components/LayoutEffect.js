import React, { useState, useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
  const [data, setData] = useState([]);

  const [length, setLength] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const newData = [
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
    {
      name: "Yirsis",
      email: "yirsis@mail.com",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 5000);
  }, [newData]);

  useLayoutEffect(() => {
    const tam = data.length;
    setLength(tam);
  });

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <p>Valores: {length}</p>
    </>
  );
};

export default LayoutEffect;
