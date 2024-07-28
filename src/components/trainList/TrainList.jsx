import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./TrainList.css";
import ad from "../../assets/ad.jpg";
import Select from "react-select";

const trainStations = [
  { id: 1, station_name: "Ahmedabad Jn", station_cd: "ADI" },
  { id: 2, station_name: "Bhopal Jn", station_cd: "BPL" },
  { id: 3, station_name: "Chennai Central", station_cd: "MAS" },
  { id: 4, station_name: "Delhi Junction", station_cd: "DLI" },
  { id: 5, station_name: "Ernakulam Jn", station_cd: "ERS" },
  { id: 6, station_name: "Firozpur Cant", station_cd: "FZR" },
  { id: 7, station_name: "Guwahati", station_cd: "GHY" },
  { id: 8, station_name: "Howrah Jn", station_cd: "HWH" },
  { id: 9, station_name: "Indore Jn", station_cd: "INDB" },
  { id: 10, station_name: "Jabalpur", station_cd: "JBP" },
  { id: 11, station_name: "Kanpur Central", station_cd: "CNB" },
  { id: 12, station_name: "Lucknow Jn", station_cd: "LJN" },
  { id: 13, station_name: "Mumbai Central", station_cd: "MMCT" },
  { id: 14, station_name: "Nagpur", station_cd: "NGP" },
  { id: 15, station_name: "Ooty", station_cd: "UAM" },
  { id: 16, station_name: "Patna Jn", station_cd: "PNBE" },
  { id: 17, station_name: "Qadian", station_cd: "QDN" },
  { id: 18, station_name: "Ranchi", station_cd: "RNC" },
  { id: 19, station_name: "Surat", station_cd: "ST" },
  { id: 20, station_name: "Trivandrum Central", station_cd: "TVC" },
  { id: 21, station_name: "Udaipur City", station_cd: "UDZ" },
  { id: 22, station_name: "Vijayawada Jn", station_cd: "BZA" },
  { id: 23, station_name: "Warangal", station_cd: "WL" },
  { id: 24, station_name: "Xylophone", station_cd: "XYZ" }, // Fictional
  { id: 25, station_name: "Yasvantpur Jn", station_cd: "YPR" },
  { id: 26, station_name: "Zahirabad", station_cd: "ZB" },
  { id: 27, station_name: "Bangalore Cant", station_cd: "BNC" }, // Repeated 'B'
  { id: 28, station_name: "Chandigarh", station_cd: "CDG" }, // Repeated 'C'
  { id: 29, station_name: "Dadar", station_cd: "DR" }, // Repeated 'D'
  { id: 30, station_name: "Asansol", station_cd: "ASN" }, // Repeated 'A'
  { id: 31, station_name: "Amritsar Jn", station_cd: "ASR" }, // Repeated 'A'
  { id: 32, station_name: "Secunderabad Jn", station_cd: "SC" }, // Repeated 'S'
  { id: 33, station_name: "Siliguri Jn", station_cd: "SGUJ" }, // Repeated 'S'
  { id: 34, station_name: "Sealdah", station_cd: "SDAH" }, // Repeated 'S'
  { id: 35, station_name: "Dehradun", station_cd: "DDN" }, // Repeated 'D'
  { id: 36, station_name: "Durg", station_cd: "DURG" }, // Repeated 'D'
];
const stationOptions = trainStations.map((station) => ({
  value: station.station_cd,
  label: station.station_name,
}));

let trainDetails = [
  {
    train_id: 1,
    train_name: "Hogwarts Express",
    train_cd: "HGEX",
    route: [
      { station_cd: "ADI", arrival: "06:00", departure: "06:10", day: 0 },
      { station_cd: "BPL", arrival: "09:00", departure: "09:10", day: 0 },
      { station_cd: "MAS", arrival: "12:00", departure: "12:10", day: 0 },
      { station_cd: "NDLS", arrival: "15:00", departure: "15:10", day: 1 },
      { station_cd: "BCT", arrival: "18:00", departure: "18:10", day: 1 },
      { station_cd: "CSMT", arrival: "21:00", departure: "21:10", day: 1 },
      { station_cd: "SBC", arrival: "00:00", departure: "00:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 400,
        vacant: Math.floor(Math.random() * 401),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 200,
        vacant: Math.floor(Math.random() * 201),
        price: 250,
      },
      {
        class_cd: "AC2",
        total: 100,
        vacant: Math.floor(Math.random() * 101),
        price: 700,
      },
      {
        class_cd: "AC1",
        total: 50,
        vacant: Math.floor(Math.random() * 51),
        price: 800,
      },
    ],
    runs_on: [0, 0, 1, 1, 1, 0, 1],
  },
  {
    train_id: 2,
    train_name: "Orient Express",
    train_cd: "OREX",
    route: [
      { station_cd: "DLI", arrival: "07:00", departure: "07:10", day: 0 },
      { station_cd: "ERS", arrival: "10:00", departure: "10:10", day: 0 },
      { station_cd: "FZR", arrival: "13:00", departure: "13:10", day: 0 },
      { station_cd: "GHY", arrival: "16:00", departure: "16:10", day: 1 },
      { station_cd: "HWH", arrival: "19:00", departure: "19:10", day: 1 },
      { station_cd: "INDB", arrival: "22:00", departure: "22:10", day: 1 },
      { station_cd: "JBP", arrival: "01:00", departure: "01:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 450,
        vacant: Math.floor(Math.random() * 451),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 220,
        vacant: Math.floor(Math.random() * 221),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 120,
        vacant: Math.floor(Math.random() * 121),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 60,
        vacant: Math.floor(Math.random() * 61),
        price: 150,
      },
    ],
    runs_on: [1, 0, 1, 1, 0, 0, 1],
  },
  {
    train_id: 3,
    train_name: "Flying Scotsman",
    train_cd: "FLSC",
    route: [
      { station_cd: "GHY", arrival: "08:00", departure: "08:10", day: 0 },
      { station_cd: "HWH", arrival: "11:00", departure: "11:10", day: 0 },
      { station_cd: "INDB", arrival: "14:00", departure: "14:10", day: 0 },
      { station_cd: "JBP", arrival: "17:00", departure: "17:10", day: 1 },
      { station_cd: "CNB", arrival: "20:00", departure: "20:10", day: 1 },
      { station_cd: "LJN", arrival: "23:00", departure: "23:10", day: 1 },
      { station_cd: "MMCT", arrival: "02:00", departure: "02:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 500,
        vacant: Math.floor(Math.random() * 501),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 250,
        vacant: Math.floor(Math.random() * 251),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 150,
        vacant: Math.floor(Math.random() * 151),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 75,
        vacant: Math.floor(Math.random() * 76),
        price: 150,
      },
    ],
    runs_on: [1, 1, 1, 1, 0, 1, 0],
  },
  {
    train_id: 4,
    train_name: "Shinkansen",
    train_cd: "SHKN",
    route: [
      { station_cd: "JBP", arrival: "09:00", departure: "09:10", day: 0 },
      { station_cd: "CNB", arrival: "12:00", departure: "12:10", day: 0 },
      { station_cd: "LJN", arrival: "15:00", departure: "15:10", day: 0 },
      { station_cd: "MMCT", arrival: "18:00", departure: "18:10", day: 1 },
      { station_cd: "NGP", arrival: "21:00", departure: "21:10", day: 1 },
      { station_cd: "PNBE", arrival: "00:00", departure: "00:10", day: 1 },
      { station_cd: "QDN", arrival: "03:00", departure: "03:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 380,
        vacant: Math.floor(Math.random() * 381),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 180,
        vacant: Math.floor(Math.random() * 181),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 90,
        vacant: Math.floor(Math.random() * 91),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 45,
        vacant: Math.floor(Math.random() * 46),
        price: 150,
      },
    ],
    runs_on: [1, 1, 0, 1, 1, 1, 0],
  },
  {
    train_id: 5,
    train_name: "Bullet Train",
    train_cd: "BLTR",
    route: [
      { station_cd: "MMCT", arrival: "10:00", departure: "10:10", day: 0 },
      { station_cd: "NGP", arrival: "13:00", departure: "13:10", day: 0 },
      { station_cd: "UAM", arrival: "16:00", departure: "16:10", day: 0 },
      { station_cd: "NDLS", arrival: "19:00", departure: "19:10", day: 1 },
      { station_cd: "BCT", arrival: "22:00", departure: "22:10", day: 1 },
      { station_cd: "CSMT", arrival: "01:00", departure: "01:10", day: 1 },
      { station_cd: "SBC", arrival: "04:00", departure: "04:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 420,
        vacant: Math.floor(Math.random() * 421),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 210,
        vacant: Math.floor(Math.random() * 211),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 110,
        vacant: Math.floor(Math.random() * 111),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 55,
        vacant: Math.floor(Math.random() * 56),
        price: 150,
      },
    ],
    runs_on: [1, 1, 1, 1, 1, 0, 1],
  },
  {
    train_id: 6,
    train_name: "Rajdhani Express",
    train_cd: "RJEX",
    route: [
      { station_cd: "PNBE", arrival: "06:00", departure: "06:10", day: 0 },
      { station_cd: "QDN", arrival: "09:00", departure: "09:10", day: 0 },
      { station_cd: "RNC", arrival: "12:00", departure: "12:10", day: 0 },
      { station_cd: "ST", arrival: "15:00", departure: "15:10", day: 1 },
      { station_cd: "TVC", arrival: "18:00", departure: "18:10", day: 1 },
      { station_cd: "UDZ", arrival: "21:00", departure: "21:10", day: 1 },
      { station_cd: "BZA", arrival: "00:00", departure: "00:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 400,
        vacant: Math.floor(Math.random() * 401),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 200,
        vacant: Math.floor(Math.random() * 201),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 100,
        vacant: Math.floor(Math.random() * 101),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 50,
        vacant: Math.floor(Math.random() * 51),
        price: 150,
      },
    ],
    runs_on: [0, 1, 1, 1, 1, 1, 0],
  },
  {
    train_id: 7,
    train_name: "Duronto Express",
    train_cd: "DUEX",
    route: [
      { station_cd: "ST", arrival: "07:00", departure: "07:10", day: 0 },
      { station_cd: "TVC", arrival: "10:00", departure: "10:10", day: 0 },
      { station_cd: "UDZ", arrival: "13:00", departure: "13:10", day: 0 },
      { station_cd: "BZA", arrival: "16:00", departure: "16:10", day: 1 },
      { station_cd: "WL", arrival: "19:00", departure: "19:10", day: 1 },
      { station_cd: "XYZ", arrival: "22:00", departure: "22:10", day: 1 },
      { station_cd: "YPR", arrival: "01:00", departure: "01:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 380,
        vacant: Math.floor(Math.random() * 381),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 190,
        vacant: Math.floor(Math.random() * 191),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 95,
        vacant: Math.floor(Math.random() * 96),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 48,
        vacant: Math.floor(Math.random() * 49),
        price: 150,
      },
    ],
    runs_on: [1, 1, 0, 1, 1, 0, 1],
  },
  {
    train_id: 8,
    train_name: "Palace on Wheels",
    train_cd: "POW",
    route: [
      { station_cd: "ADI", arrival: "08:00", departure: "08:10", day: 0 },
      { station_cd: "BPL", arrival: "11:00", departure: "11:10", day: 0 },
      { station_cd: "MAS", arrival: "14:00", departure: "14:10", day: 0 },
      { station_cd: "NDLS", arrival: "17:00", departure: "17:10", day: 1 },
      { station_cd: "BCT", arrival: "20:00", departure: "20:10", day: 1 },
      { station_cd: "CSMT", arrival: "23:00", departure: "23:10", day: 1 },
      { station_cd: "SBC", arrival: "02:00", departure: "02:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 420,
        vacant: Math.floor(Math.random() * 421),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 210,
        vacant: Math.floor(Math.random() * 211),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 110,
        vacant: Math.floor(Math.random() * 111),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 55,
        vacant: Math.floor(Math.random() * 56),
        price: 150,
      },
    ],
    runs_on: [0, 1, 1, 1, 1, 0, 1],
  },
  {
    train_id: 9,
    train_name: "Golden Chariot",
    train_cd: "GCHR",
    route: [
      { station_cd: "DLI", arrival: "09:00", departure: "09:10", day: 0 },
      { station_cd: "ERS", arrival: "12:00", departure: "12:10", day: 0 },
      { station_cd: "FZR", arrival: "15:00", departure: "15:10", day: 0 },
      { station_cd: "GHY", arrival: "18:00", departure: "18:10", day: 1 },
      { station_cd: "HWH", arrival: "21:00", departure: "21:10", day: 1 },
      { station_cd: "INDB", arrival: "00:00", departure: "00:10", day: 1 },
      { station_cd: "JBP", arrival: "03:00", departure: "03:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 450,
        vacant: Math.floor(Math.random() * 451),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 220,
        vacant: Math.floor(Math.random() * 221),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 120,
        vacant: Math.floor(Math.random() * 121),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 60,
        vacant: Math.floor(Math.random() * 61),
        price: 150,
      },
    ],
    runs_on: [1, 0, 1, 1, 0, 1, 0],
  },
  {
    train_id: 10,
    train_name: "Maharajas' Express",
    train_cd: "MJEX",
    route: [
      { station_cd: "GHY", arrival: "10:00", departure: "10:10", day: 0 },
      { station_cd: "HWH", arrival: "13:00", departure: "13:10", day: 0 },
      { station_cd: "INDB", arrival: "16:00", departure: "16:10", day: 0 },
      { station_cd: "JBP", arrival: "19:00", departure: "19:10", day: 1 },
      { station_cd: "CNB", arrival: "22:00", departure: "22:10", day: 1 },
      { station_cd: "LJN", arrival: "01:00", departure: "01:10", day: 1 },
      { station_cd: "MMCT", arrival: "04:00", departure: "04:10", day: 2 },
    ],
    seat_availability: [
      {
        class_cd: "SL",
        total: 500,
        vacant: Math.floor(Math.random() * 501),
        price: 150,
      },
      {
        class_cd: "AC3",
        total: 250,
        vacant: Math.floor(Math.random() * 251),
        price: 150,
      },
      {
        class_cd: "AC2",
        total: 150,
        vacant: Math.floor(Math.random() * 151),
        price: 150,
      },
      {
        class_cd: "AC1",
        total: 75,
        vacant: Math.floor(Math.random() * 76),
        price: 150,
      },
    ],
    runs_on: [1, 1, 1, 1, 0, 1, 1],
  },
];

const TrainList = () => {
  const [fromStation, setFromStation] = useState([]);
  const [toStation, setToStation] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);



  const handleFromChange = (selectedOption) => {
    setFromStation(selectedOption);
  };
  const handleToChange = (selectedOption) => {
    setToStation(selectedOption);
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

  return (
    <div>
      <Header />
      <div className="mainDiv">
        <div className="searchDiv">
          <div className="fromToDiv">
            <Select
              options={stationOptions}
              value={fromStation}
              onChange={handleFromChange}
              isClearable={true}
              placeholder="From Station"
            />
            <Select
              options={stationOptions}
              value={toStation}
              onChange={handleToChange}
              isClearable={true}
              placeholder="To Station"
            />
            <input type="date" id="date" name="date" required />
            <select id="class" name="class">
              <option value="ac3">AC 3 Tier</option>
              <option value="ac2">AC 2 Tier</option>
              <option value="ac1">AC First Class</option>
              <option value="sleeper">Sleeper</option>
            </select>
            <select id="quota" name="quota">
              <option value="general">General</option>
              <option value="tatkal">Tatkal</option>
              <option value="ladies">Ladies</option>
            </select>
          </div>

          <div className="searchButton">
            <button type="submit">Search Trains</button>
          </div>
        </div>
        <div className="adDiv">
          <img src={ad} alt="advertisment" />
        </div>
        {/* .........YAHA RAHEGA TRAIN LIST .......... */}

        <div className="listOfTrain">
          {filteredTrains.map((train) => (
            <div key={train.train_id}>
              <div className="trainNameDiv">
                <h4>{train.train_name}</h4>
                <h4>{train.runs_on.join(", ")}</h4>
                <h4>{train.train_cd}</h4>
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
              <div className="classDiv">
                {train.seat_availability.map((seat) => (
                  <div key={seat.class_cd}>
                    {seat.class_cd}: {seat.vacant} seats
                  </div>
                ))}
              </div>
              <div>
                <button>Book Now</button>
              </div>
            </div>
          ))}
          {filteredTrains.length === 0 && (
            <p>No trains available for the selected route.</p>
          )}
        </div>

        {/* <div className="listOfTrain">
            <div>
                <div className="trainNameDiv">
                    <h4>train name</h4>
                    <h4>runs on</h4>
                    <h4>train schedule</h4>
                </div>
                <div  className="trainTiming">
                    <h4>arrival</h4>
                    <h4>from</h4>
                    <h4>departue</h4>
                    <h4>To</h4>
                </div>
                <div className="classDiv">
                    <div>ac3</div>
                    <div>ac2</div>
                    <div>ac first</div>
                    <div>sleeper</div>
                </div>
                <div>
                    <button>Book Now</button>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default TrainList;
