import React from "react";

const SearchResultsRow = props => {
  return (
    <div>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkin}</td>
      <td>{props.checkout}</td>
    </div>
  );
};

export default SearchResultsRow;
