import React from "react";

const CustomerProfile = props => {
  console.log("customer", props.id);
  return <p>Customer {props.id} Profile</p>;
};

export default CustomerProfile;
