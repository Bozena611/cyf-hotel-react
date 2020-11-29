import React, { useState } from "react";

const NewBooking = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form", firstName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={event => setSurname(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="roomId"
          placeholder="RoomId"
          value={roomId}
          onChange={event => setRoomId(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkInDate"
          placeholder="Check-in"
          value={checkIn}
          onChange={event => setCheckIn(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="checkOutDate"
          placeholder="Check-out"
          value={checkOut}
          onChange={event => setCheckOut(event.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default NewBooking;
