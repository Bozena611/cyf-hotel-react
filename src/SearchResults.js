import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <>
      <table className="table table-bordered table-dark">
        <TableHead />
        {props.results.map((element, i) => {
          //console.log("map", element);
          return <TableBody key={i} element={element} />;
        })}
      </table>
    </>
  );
};

export default SearchResults;
