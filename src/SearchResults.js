import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-bordered table-hover table-dark">
        <TableHead />
        {props.results.map((element, i) => {
          console.log("map", element);
          return <TableBody key={i} element={element} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults;
