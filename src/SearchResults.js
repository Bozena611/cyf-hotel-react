import React from "react";
import SearchResultsRow from "./SearchResultsRow";
import SearchResultsHead from "./SearchResultsHead";

const SearchResults = props => {
  console.log("results", props.results);
  return (
    <div>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <SearchResultsHead />
          </tr>
        </thead>
        {props.results.map((element, i) => {
          console.log("map", props.results.i);
          return (
            <tbody>
              <tr>
                <SearchResultsRow
                  key={i}
                  id={element.id}
                  title={element.title}
                  name={element.firstName}
                  surname={element.surname}
                  email={element.email}
                  roomId={element.roomId}
                  checkin={element.checkInDate}
                  checkout={element.checkOutDate}
                />
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default SearchResults;
