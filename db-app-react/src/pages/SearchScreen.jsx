import React, { useState } from "react";

const SearchScreen = ({ history }) => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?query=${inputValue}`);
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character
              <input
                placeholder="Name Character"
                type="text"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-success w-100">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
