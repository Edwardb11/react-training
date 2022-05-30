import React from "react";
import { useParams } from "react-router";

const CharacterScreen = () => {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
};

export default CharacterScreen;
