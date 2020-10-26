import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const SearchResults2 = props => {
  return (
    <div>
      <table class="table table-bordered table-hover table-dark">
        <TableHead />
        {props.results.map((element, i) => {
          console.log("map", element);
          return <TableBody element={element} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults2;
