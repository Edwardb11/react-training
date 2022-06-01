import React from "react";

const TableContacts = ({ contacts }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
