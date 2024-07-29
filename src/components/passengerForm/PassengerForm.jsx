import React, { useState } from "react";
import Header from "../header/Header";
import "./PassengerForm.css";
import { useNavigate } from "react-router-dom";

const PassengerForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    gender: "male",
    country: "IN",
    preference: "NO preference",
    catering: "catering",
    contact: "",
    email: "",
    payment: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formValues.name) formErrors.name = "Name is required";
    if (!formValues.age) formErrors.age = "Age is required";
    if (!formValues.contact) formErrors.contact = "Contact number is required";
    if (!formValues.email) formErrors.email = "Email is required";
    if (!formValues.payment) formErrors.payment = "Payment mode is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("passengerFormData", JSON.stringify(formValues));
      alert("Booking Confirmed!");
      navigate("/Finalbooking");
    } else {
      setErrors(formErrors);
    }
  };
  const trainName = localStorage.getItem("trainName");
  const toStation = localStorage.getItem("toStation");
  const fromStation = localStorage.getItem("fromStation");

  return (
    <div>
      <Header />
      <div className="notesDiv">
        <h5>
          Note: Please submit full name of the passengers instead of initials.
        </h5>
        <h5>Note: The ID card will be required during journey</h5>
      </div>
      <div className="Passengerdiv">
        <form onSubmit={handleSubmit}>
          <div className="mainDiv">
            <div className="PassengerDetails">
              <h1>Passenger Details</h1>
              <h5>
                Enhance Your Travel with Taste! Opt for Onboard Catering for a
                Delicious Dining Experience!
              </h5>
              <div>
                <div className="passengerFormDiv">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={formValues.age}
                    onChange={handleInputChange}
                  />
                  {errors.age && <p className="error">{errors.age}</p>}
                  <select
                    id="gender"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                  </select>
                  <select
                    id="countries"
                    name="country"
                    value={formValues.country}
                    onChange={handleInputChange}
                  >
                    <option value="IN">India</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                  </select>
                  <select
                    id="preference"
                    name="preference"
                    value={formValues.preference}
                    onChange={handleInputChange}
                  >
                    <option value="NO preference">NO preference</option>
                    <option value="window">Window side</option>
                  </select>
                  <select
                    id="catering"
                    name="catering"
                    value={formValues.catering}
                    onChange={handleInputChange}
                  >
                    <option value="catering">Catering Service Option</option>
                    <option value="veg">Veg</option>
                    <option value="Non-veg">Non-veg</option>
                  </select>
                </div>
                <div className="ContactDetails">
                  <h2>Contact Details</h2>
                  <h5>
                    Ticket details will be sent to email and registered mobile
                    number
                  </h5>
                  <div className="contactDiv">
                    <input
                      type="phone"
                      id="Contact"
                      name="contact"
                      placeholder="Mobile number"
                      value={formValues.contact}
                      onChange={handleInputChange}
                    />
                    {errors.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentDetails">
              <h2>Payment Mode</h2>
              <div className="paymentDiv">
                <input
                  type="radio"
                  id="wallet"
                  name="payment"
                  value="wallet"
                  onChange={handleInputChange}
                />
                <label htmlFor="wallet">Pay through Wallet</label>
                <br />
                <h6>Convenience Fee: ₹30/- + GST</h6>
                <input
                  type="radio"
                  id="upi"
                  name="payment"
                  value="upi"
                  onChange={handleInputChange}
                />
                <label htmlFor="upi">Pay through BHIM/UPI</label>
                <br />
                <h6>Convenience Fee: ₹10/- + GST</h6>
                {errors.payment && <p className="error">{errors.payment}</p>}
              </div>
            </div>
            <div className="Continue">
              <div className="Continuediv">
                <button type="submit">Continue</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassengerForm;
