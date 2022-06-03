import React from "react";

const Buttons = ({ type, text }) => {
  return (
    <>
      <button className={type}>{text}</button>
    </>
  );
};

export default Buttons;
