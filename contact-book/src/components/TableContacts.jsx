import React from "react";

const TableContacts = ({ contacts = [], dispatch }) => {
  
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

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
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <th>{contact.id}</th>
              <td>{contact.nombre}</td>
              <td>{contact.numero}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContacts;
