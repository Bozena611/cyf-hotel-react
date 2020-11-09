import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  console.log("customer", props.id);

  const [customerId, setCustomerId] = useState("");
  const [email, setEmail] = useState("");
  const [vip, setVip] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log("profile", data);
        setCustomerId(data.id);
        setEmail(data.email);
        if (data.vip === true) {
          setVip(data.vip);
        }
        setPhone(data.phoneNumber);
      });
  }, [props.id]);

  return (
    <div>
      {customerId ? (
        <div>
          <p>Customer {props.id} Profile</p>
          <ul style={{ listStyle: "none" }}>
            <li>ID: {customerId}</li>
            <li>email: {email}</li>
            {vip ? <li>VIP</li> : null}
            <li>phone: {phone}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CustomerProfile;
