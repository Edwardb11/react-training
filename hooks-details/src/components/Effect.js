import React, { useState, useEffect } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);

  //efectos con dependencia solo se ejecutara cuando el ID cambie
  useEffect(() => {
    setUsers([
      {
        hola: "cambie el ID",
      },
    ]);
    console.log(users);
  }, [id]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    setId(0);
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <form onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Effect;
