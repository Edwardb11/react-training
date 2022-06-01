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
    </table>
  );
};

export default TableContacts;
