import React from "react";
import "./BookTrain.css";

const BookTrain = () => {
  return (
    <section className="bookTrain">
      <div className="container">
        <h2>Book Your Train</h2>
        <form>
          <div className="formGroup">
            <input
              type="text"
              id="From"
              name="From"
              placeholder="From"
              required
            />
            <input type="text" id="to" name="To" placeholder="To" required />
            <input type="date" id="date" name="date" required />
          </div>
          <div className="selectDiv">
            <div className="formGroup">
              <select id="class" name="class">
                <option value="ac3">AC 3 Tier</option>
                <option value="ac2">AC 2 Tier</option>
                <option value="ac1">AC First Class</option>
                <option value="sleeper">Sleeper</option>
              </select>
            </div>
            <div className="formGroup">
              <select id="quota" name="quota">
                <option value="general">General</option>
                <option value="tatkal">Tatkal</option>
                <option value="ladies">Ladies</option>
              </select>
            </div>
          </div>
          <button type="submit">Search Trains</button>
        </form>
      </div>
    </section>
  );
};

export default BookTrain;
