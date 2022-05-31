import React, { useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
const SearchScreen = ({ history }) => {
  const location = useLocation();
  // console.log(location.search)

  const { query = " " } = queryString.parse(location.search);
  // console.log(query)
  
  const [inputValue, setInputValue] = useState(query);

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
