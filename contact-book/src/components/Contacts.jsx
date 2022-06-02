import React, { useReducer } from "react";
import { ContactReducer } from "../reducers/ContactReducer";
import FormsAdd from "./FormsAdd";
import TableContacts from "./TableContacts";

const Contacts = () => {
  const contacts = [
    {
      id: "ahdhkas",
      name: "Juan",
      phone: "12345678",
    },
    {
      id: "ajdhajc",
      name: "Pedro",
      phone: "87654321",
    },
    {
      id: "ajdhsjak",
      name: "Pedro",
      phone: "87654321",
    },
  ];

  const [state, dispatch] = useReducer(ContactReducer, contacts);

  return (
    <div className="container mt-3">
      <FormsAdd dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
