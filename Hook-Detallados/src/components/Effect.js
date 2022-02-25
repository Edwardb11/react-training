import React, { useState, useEffect } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  console.log(users);
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log({
      name: "hola",
      email: "brito@hotmail.com",
      password: "1234",
    });
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
            type="text"
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
