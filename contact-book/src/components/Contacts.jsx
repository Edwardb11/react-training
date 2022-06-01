import React from "react";
import FormsAdd from "./FormsAdd";
import TableContacts from "./TableContacts";

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "Juan",
      phone: "12345678",
    },
    {
      id: 2,
      name: "Pedro",
      phone: "87654321",
    },
  ];
  return (
    <div className="container mt-3">
      <FormsAdd />
      <TableContacts contacts={contacts} />
    </div>
  );
};

export default Contacts;
