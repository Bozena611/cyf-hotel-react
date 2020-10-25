import React from "react";
import OneCard from "./OneCard";

const TouristInfoCards = props => {
  return (
    <div className="CardsContainer">
      {props.hotels.map((hotel, i) => {
        return (
          <OneCard
            key={i}
            name={hotel.name}
            img={hotel.image}
            url={hotel.url}
          />
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
