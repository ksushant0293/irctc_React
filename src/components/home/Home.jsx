import { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Select from "react-select";
import "./Home.css";
import ad2 from "../../assets/ad2.jpeg";
import { trainStations } from "../trainList/TrainListData";
import { useNavigate } from "react-router-dom";

// const trainStations = [
//   { id: 1, station_name: "Ahmedabad Jn", station_cd: "ADI" },
//   { id: 2, station_name: "Bhopal Jn", station_cd: "BPL" },
//   { id: 3, station_name: "Chennai Central", station_cd: "MAS" },
//   { id: 4, station_name: "Delhi Junction", station_cd: "DLI" },
//   { id: 5, station_name: "Ernakulam Jn", station_cd: "ERS" },
//   { id: 6, station_name: "Firozpur Cant", station_cd: "FZR" },
//   { id: 7, station_name: "Guwahati", station_cd: "GHY" },
//   { id: 8, station_name: "Howrah Jn", station_cd: "HWH" },
//   { id: 9, station_name: "Indore Jn", station_cd: "INDB" },
//   { id: 10, station_name: "Jabalpur", station_cd: "JBP" },
//   { id: 11, station_name: "Kanpur Central", station_cd: "CNB" },
//   { id: 12, station_name: "Lucknow Jn", station_cd: "LJN" },
//   { id: 13, station_name: "Mumbai Central", station_cd: "MMCT" },
//   { id: 14, station_name: "Nagpur", station_cd: "NGP" },
//   { id: 15, station_name: "Ooty", station_cd: "UAM" },
//   { id: 16, station_name: "Patna Jn", station_cd: "PNBE" },
//   { id: 17, station_name: "Qadian", station_cd: "QDN" },
//   { id: 18, station_name: "Ranchi", station_cd: "RNC" },
//   { id: 19, station_name: "Surat", station_cd: "ST" },
//   { id: 20, station_name: "Trivandrum Central", station_cd: "TVC" },
//   { id: 21, station_name: "Udaipur City", station_cd: "UDZ" },
//   { id: 22, station_name: "Vijayawada Jn", station_cd: "BZA" },
//   { id: 23, station_name: "Warangal", station_cd: "WL" },
//   { id: 24, station_name: "Xylophone", station_cd: "XYZ" }, // Fictional
//   { id: 25, station_name: "Yasvantpur Jn", station_cd: "YPR" },
//   { id: 26, station_name: "Zahirabad", station_cd: "ZB" },
//   { id: 27, station_name: "Bangalore Cant", station_cd: "BNC" }, // Repeated 'B'
//   { id: 28, station_name: "Chandigarh", station_cd: "CDG" }, // Repeated 'C'
//   { id: 29, station_name: "Dadar", station_cd: "DR" }, // Repeated 'D'
//   { id: 30, station_name: "Asansol", station_cd: "ASN" }, // Repeated 'A'
//   { id: 31, station_name: "Amritsar Jn", station_cd: "ASR" }, // Repeated 'A'
//   { id: 32, station_name: "Secunderabad Jn", station_cd: "SC" }, // Repeated 'S'
//   { id: 33, station_name: "Siliguri Jn", station_cd: "SGUJ" }, // Repeated 'S'
//   { id: 34, station_name: "Sealdah", station_cd: "SDAH" }, // Repeated 'S'
//   { id: 35, station_name: "Dehradun", station_cd: "DDN" }, // Repeated 'D'
//   { id: 36, station_name: "Durg", station_cd: "DURG" }, // Repeated 'D'
// ];

const stationOptions = trainStations.map((station) => ({
  value: station.station_cd,
  label: station.station_name,
}));

const Home = () => {
  const [fromStation, setFromStation] = useState(null);
  const [fromStationName, setFromStationName] = useState(null);
  const [toStation, setToStation] = useState(null);
  const [toStationName, setToStationName] = useState(null);
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const handleFromChange = (selectedOption) => {
    setFromStation(selectedOption);
    setFromStationName(selectedOption?.label);
    localStorage.setItem("fromStation", selectedOption?.value);
    localStorage.setItem("fromStationName", selectedOption?.label);
  };

  const handleToChange = (selectedOption) => {
    setToStation(selectedOption);
    setFromStationName(selectedOption?.label);
    localStorage.setItem("toStation", selectedOption?.value);
    localStorage.setItem("toStationName", selectedOption?.label);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    localStorage.setItem("travelDate", selectedDate);
  };

  const validateForm = () => {
    const errors = {};
    if (!fromStation) errors.fromStation = "From Station is required";
    if (!toStation) errors.toStation = "To Station is required";
    if (fromStation && toStation && fromStation.value === toStation.value) {
      errors.toStation = "From and To stations cannot be the same";
    }
    if (!date) errors.date = "Date is required";
    return errors;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/TrainList");
    } else {
      setErrors(validationErrors);
    }
  };
  const storedUsername = localStorage.getItem("username");

  const classOption = [
    { value: "AC 3 Tier", label: "AC 3 Tier" },
    { value: "AC 2 Tier", label: "AC 2 Tier" },
    { value: "AC First Class", label: "AC First Class" },
    { value: "Sleeper", label: "Sleeper" },
  ];

  const quotaOptions = [
    { value: "General", label: "General" },
    { value: "Tatkal", label: "Tatkal" },
  ];

  return (
    <div>
      <Header />
      <div className="WelcomeMessage">Welcome - {storedUsername}</div>
      <div className="homeDiv">
        <div className="bookTrain">
          <div className="container">
            <h2>BOOK TICKET</h2>
            <form onSubmit={handleSearch}>
              <div className="formGroup">
                <Select
                  options={stationOptions}
                  value={fromStation}
                  onChange={handleFromChange}
                  isClearable={true}
                  placeholder="From Station"
                />
                {errors.fromStation && (
                  <p className="error">{errors.fromStation}</p>
                )}
                <Select
                  className="select"
                  options={stationOptions}
                  value={toStation}
                  onChange={handleToChange}
                  isClearable={true}
                  placeholder="To Station"
                />
                {errors.toStation && (
                  <p className="error">{errors.toStation}</p>
                )}
                {/* <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                /> */}
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && <p className="error">{errors.date}</p>}
                <Select
                  options={classOption}
                  isClearable={true}
                  placeholder="All Classes"
                />
                <Select
                  options={quotaOptions}
                  isClearable={true}
                  placeholder="General"
                />
                <button type="submit">Search Trains</button>
              </div>
            </form>
          </div>
        </div>
        <div className="bgcmessage">
          <h1>INDIAN RAILWAYS</h1>
          <h2>Safety | Security | Punctuality</h2>
        </div>
      </div>
      <div className="adimg">
        <img src={ad2} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
