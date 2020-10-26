import React from "react";

const TableBody = props => {
  let element = props.element;
  return (
    <tbody>
      <tr>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.firstName}</td>
        <td>{element.surname}</td>
        <td>{element.email}</td>
        <td>{element.roomId}</td>
        <td>{element.checkInDate}</td>
        <td>{element.checkOutDate}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
