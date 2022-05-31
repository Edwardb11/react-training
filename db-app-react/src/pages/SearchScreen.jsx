import React from "react";

const SearchScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form>
            <label className="form-label w-100">
              Character
              <input
                placeholder="Name Character"
                type="text"
                className="form-control"
                autoComplete="off"
                value={""}
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
