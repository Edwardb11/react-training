import React, { useEffect, useReducer } from "react";
import { ContactReducer } from "../reducers/ContactReducer";
import FormsAdd from "./FormsAdd";
import TableContacts from "./TableContacts";

const init = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ?  JSON.parse('contacts') : [];
};
const Contacts = () => {
  const [state, dispatch] = useReducer(ContactReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <FormsAdd dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
