import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const SearchScreen = ({ history }) => {
  const location = useLocation();
  // console.log(location.search)

  const { query = " " } = queryString.parse(location.search);
  // console.log(query)

  const [inputValue, setInputValue] = useState(query);
  const [characters, setCharacters] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?query=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };
  useEffect(() => {
    getCharacters();
    // console.log(characters)
  }, [query]);

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
        <div className="col-6">
          <h2> Results {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-warning text-center ">
              Please Search a characters
            </div>
          )}
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
