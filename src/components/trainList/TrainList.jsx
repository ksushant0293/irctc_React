import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./TrainList.css";
import ad from "../../assets/ad.jpg";
import Select from "react-select";
import { trainDetails, trainStations } from "./TrainListData";
import { useNavigate } from "react-router-dom";

const stationOptions = trainStations.map((station) => ({
  value: station.station_cd,
  label: station.station_name,
}));

const getStoredStation = (key) => {
  const value = localStorage.getItem(key);
  return value ? stationOptions.find((option) => option.value === value) : null;
};

const TrainList = () => {
  const [fromStation, setFromStation] = useState(
    getStoredStation("fromStation")
  );
  const [toStation, setToStation] = useState(getStoredStation("toStation"));
  const [travelDate, setTravelDate] = useState(
    localStorage.getItem("travelDate") || ""
  );
  const [filteredTrains, setFilteredTrains] = useState([]);
  const navigate = useNavigate();

  const handleFromChange = (selectedOption) => {
    setFromStation(selectedOption);
    localStorage.setItem(
      "fromStation",
      selectedOption ? selectedOption.value : ""
    );
  };

  const handleToChange = (selectedOption) => {
    setToStation(selectedOption);
    localStorage.setItem(
      "toStation",
      selectedOption ? selectedOption.value : ""
    );
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setTravelDate(date);
    localStorage.setItem("travelDate", date);
  };

  useEffect(() => {
    if (fromStation && toStation) {
      const filtered = trainDetails.filter((train) => {
        const routeStationCodes = train.route.map(
          (station) => station.station_cd
        );
        return (
          routeStationCodes.includes(fromStation.value) &&
          routeStationCodes.includes(toStation.value)
        );
      });
      setFilteredTrains(filtered);
    } else {
      setFilteredTrains([]);
    }
  }, [fromStation, toStation]);

  const handleBook = (train) => {
    navigate("/passengerForm");
    localStorage.setItem("trainName", train.train_name);
  };

  return (
    <div>
      <Header />
      <div className="mainDiv">
        <div className="searchDiv">
          <h1>LIST OF TRAINS</h1>
        </div>

        {/* .........YAHA RAHEGA TRAIN LIST .......... */}

        <div className="listOfTrain">
          {fromStation && toStation && travelDate ? (
            filteredTrains.map((train) => (
              <div className="trainDetailsDiv" key={train.train_id}>
                <div className="left">
                  <div className="trainNameDiv">
                    <h2>{train.train_name}</h2>
                    {/* <h4>{train.runs_on.join(" ")}</h4> */}
                    {/* <h4>{train.runs_on.map()}</h4> */}
                    {/* <h4>{train.train_cd}</h4> */}
                  </div>
                  <div className="trainTiming">
                    {train.route.map((stop) => (
                      <div key={stop.station_cd}>
                        <h4>{stop.arrival}</h4>
                        <h4>{stop.station_cd}</h4>
                        <h4>{stop.departure}</h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="right">
                  <div className="classDiv">
                    {train.seat_availability.map((seat) => (
                      <button key={seat.class_cd}>
                        {seat.class_cd}: {seat.vacant} seats
                      </button>
                    ))}
                  </div>
                  <div className="bookdiv">
                    <div>
                    <button onClick={() => handleBook(train)}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>
              Please select a From Station, To Station, and Travel Date to view
              available trains.
            </p>
          )}
          {fromStation &&
            toStation &&
            travelDate &&
            filteredTrains.length === 0 && (
              <p>No trains available for the selected route.</p>
            )}
        </div>
        <div className="adDiv">
          <img src={ad} alt="advertisment" />
        </div>
      </div>
    </div>
  );
};

export default TrainList;
