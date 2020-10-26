import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check-in date</th>
        <th scope="col">Check-out date</th>
      </tr>
    </thead>
  );
};

export default TableHead;
