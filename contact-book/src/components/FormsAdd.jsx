import React from "react";

const FormsAdd = () => {
  return (
    <div className="conatiner">
      <label className="mx-1 d-grid gap-2">
        Name:
        <input type="text" className="form-control" autoComplete="off" />{" "}
      </label>
      <label className="mx-1 d-grid gap-2">
        Phone:
        <input type="text" className="form-control" autoComplete="off" />{" "}
      </label>
      <div className="mx-1 d-grid gap-2">
        <button className="btn btn-primary mt-2">Add</button>
      </div>
    </div>
  );
};

export default FormsAdd;
