import React from "react";
import { useState } from "react";

const FormsAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", phone: "" });
  const { name, phone } = data;

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]:e.target.value
    })
  };

  const actionAdd = {
    type: "add",
    payload: {
      id:'1',
      name,
      phone,
    },
  };
  
  const handleAdd = () => {
    dispatch(actionAdd);
  };
  return (
    <>
      <div className="conatiner">
        <label className="mx-1 d-grid gap-2">
          Name:
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            autoComplete="off"
          />{" "}
        </label>
        <label className="mx-1 d-grid gap-2">
          Phone:
          <input
            value={phone}
            onChange={handleChange}
            name="phone"
            type="text"
            className="form-control"
            autoComplete="off"
          />{" "}
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-primary mt-2">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FormsAdd;
