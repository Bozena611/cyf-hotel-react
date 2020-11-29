import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import NewBooking from "./NewBooking";

let hotels = [
  {
    name: "Glasgow",
    image:
      "https://images.snaptrip.com/wp-content/uploads/2017/05/27064934/Webp.net-resizeimage-2019-09-27T074832.785-1-1024x767-1024x585.jpg",
    url: "peoplemakeglasgow.com"
  },
  {
    name: "Manchester",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/manchester-hero-5ca313c.jpg?quality=90&resize=768,574",
    url: "visitmanchester.com"
  },
  {
    name: "London",
    image:
      "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg",
    url: "visitlondon.com"
  }
];

let footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App" style={{ marginBottom: 0 }}>
      <Heading />
      <TouristInfoCards hotels={hotels} />
      <Bookings />
      <Restaurant />
      <NewBooking />
      <Footer className="footer" addressList={footer} />
    </div>
  );
};

export default App;
