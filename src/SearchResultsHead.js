import React from "react";

const SearchResultsHead = props => {
  return (
    <div>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">email</th>
      <th scope="col">room id</th>
      <th scope="col">check in date</th>
      <th scope="col">check out date</th>
    </div>
  );
};

export default SearchResultsHead;
