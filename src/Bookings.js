import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // week 3 ex-16
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        //console.log("Bookings", data[0].firstName);
        setBookings(data);
        setLoading(true);
      });
  }, []);

  // week 3 ex-19
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log("state", bookings);
    const filteredBookings = bookings.filter(
      element =>
        element.firstName === searchVal || element.surname === searchVal
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          {loading ? (
            <SearchResults results={bookings} />
          ) : (
            <span>Loading... Please wait</span>
          )}
        </div>
      ) : (
        <span>Error</span>
      )}
    </div>
  );
};

export default Bookings;
