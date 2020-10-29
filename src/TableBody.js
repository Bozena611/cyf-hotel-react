import React, { useState } from "react";
import moment from "moment";
//var a = moment([2007, 0, 29]);
//var b = moment([2007, 0, 28]);
//a.diff(b, 'days') // 1

const TableBody = props => {
  let element = props.element;
  let checkIn = moment(props.element.checkInDate);
  let checkOut = moment(props.element.checkOutDate);
  /*
  const [selected, setSelected] = useState(false);
  let color;

  const handleClick = () => {
    setSelected(true);
    if (selected===true) {
      console.log(true);
      color = "red";
    }
  }
  */

  const [selected, setSelected] = useState("yellow");

  const handleClick = () => {
    setSelected("red");
    return false;
  };

  return (
    <tbody>
      <tr className="Text-color" className={selected} onClick={handleClick}>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.firstName}</td>
        <td>{element.surname}</td>
        <td>{element.email}</td>
        <td>{element.roomId}</td>
        <td>{element.checkInDate}</td>
        <td>{element.checkOutDate}</td>
        <td>{checkOut.diff(checkIn, "days")}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
