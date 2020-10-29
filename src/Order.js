import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <li className="order-list">
        {props.orderType}: {orders}{" "}
        <span className="pizza-orders">
          <RestaurantButton handleClick={orderOne} />
        </span>
      </li>
    </div>
  );
};

export default Order;
