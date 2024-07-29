import React from "react";
import Header from "../components/header/Header";
import "./Finalbooking.css"
import arrow from "../assets/arrow.png"

const trainName = localStorage.getItem("trainName");
console.log(trainName);
const toStation = localStorage.getItem("toStation");
console.log();
const fromStation = localStorage.getItem("fromStation");
const travelDate = localStorage.getItem("travelDate");
console.log(travelDate);
const fromStationName = localStorage.getItem("fromStationName");
console.log(fromStationName);
const toStationName = localStorage.getItem("toStationName");
console.log(toStationName);
const Pnr = Math.floor(Math.random() * 10000000);
// const data = localStorage.getItem("passengerFormData")
// const passengerName = JSON.parse(data);
// console.log(passengerName.name);
// const name = passengerName.name
const name = (JSON.parse(localStorage.getItem("passengerFormData"))).name ? (JSON.parse(localStorage.getItem("passengerFormData"))).name : "";
const email = (JSON.parse(localStorage.getItem("passengerFormData"))).email ? (JSON.parse(localStorage.getItem("passengerFormData"))).email:"";
const contact = (JSON.parse(localStorage.getItem("passengerFormData"))).contact ? (JSON.parse(localStorage.getItem("passengerFormData"))).contact : "";
const Finalbooking = () => {
  return (
    <div>
      <Header />
      <div className="mainDiv">
        <h1>Booking Details</h1>
        <div className="trainDetails">
        <div className="date">
          <h4>Journey Date- {travelDate}</h4>
        </div>
          <div className="bookedtrainDetails">
            <div className="leftdiv">
              <h4>Booked From</h4>
              <h4>
                {fromStationName}- <span>{fromStation}</span>
              </h4>
              <div className="pnr">
              <h4>PNR</h4>
              <h4>{Pnr}</h4>
            </div>
            </div>
            <div>
              <img src={arrow} alt="arrow_logo" className="arrowimg" />
            </div>
            <div className="rightdiv">
              <h4>To</h4>
              <h4>
                {toStationName}- <span>{toStation}</span>
              </h4>
              <div className="trainName">
              <h4>Train Name</h4>
              <h4>{trainName}</h4>
            </div>
            </div>
          </div>
        </div>
        <div className="bookedPassengerDetails">
          <h2>Passenger Details</h2>
          <h4>name- {name}</h4>
          <h4>email- {email}</h4>
          <h4>mobile- {contact}</h4>
        </div>
        <div className="date">
          <h2>your seat is confirmed! happy journey</h2>
        </div>
      </div>
    </div>
  );
};

export default Finalbooking;
