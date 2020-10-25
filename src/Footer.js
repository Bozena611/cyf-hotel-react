import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.addressList.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
