import React from "react";
import Search from "./Search.js";
//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults2 from "./SearchResults2";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/*<SearchResults results={FakeBookings} />*/}
        <SearchResults2 results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
