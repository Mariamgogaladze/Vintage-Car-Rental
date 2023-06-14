import "./bookcar.css";
import { PickDropData } from "./OptionsData";
import { TypeData } from "./OptionsData";
import Reservation from "../reservation/Reservation";
import { useState } from "react";

function BookCar({ handleScroll }: any) {
  const [showReservatioion, setShowReservation] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedPickLocation, setSelectedPickLocation] = useState("");
  const [selectedDropLocation, setSelectedDropLocation] = useState("");
  const [selctedPickDate, setSelectedPickDate] = useState("");
  const [selctedDropDate, setSelectedDropDate] = useState("");
  const [showError, setShowError] = useState(false);
  const [showDone, setShowDone] = useState(false);

  function HandleResCilck() {
    if (
      selctedDropDate === "" ||
      selctedPickDate === "" ||
      selectedDropLocation === "" ||
      selectedPickLocation === "" ||
      selectedCar === ""
    ) {
      setShowError(true);
    } else {
      setShowError(false);
      handleScroll();
      setShowReservation(!showReservatioion);
    }
  }

  function HandleResClose() {
    setShowReservation(false);
    handleScroll(false);
  }

  return (
    <div className="bookcar-section padding-in">
      <div className="bookcar-container padding-in" id="bookride">
        <h1 className="bookcar-heading">Book a car</h1>
        <h5 className={`error-message ${showError ? "show" : ""}`}>
          All fields required!
        </h5>
        <h5 className={`booking-done ${showDone ? "show" : ""}`}>
          Check your email to confirm an order
        </h5>
        <div className="bookcar-options">
          <div className="firstthree">
            <div className="car-type">
              <label>
                Select Your Car Type<span className="required">*</span>
                <br />
                <select
                  name="selectedType"
                  value={selectedCar} // ...force the select's value to match the state variable...
                  onChange={(e) => setSelectedCar(e.target.value)}
                >
                  {TypeData.map((type) => (
                    <option key={type.key} value={type.value}>
                      {type.model}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="pick-up">
              <label>
                Pick-up <span className="required">*</span>
                <br />
                <select
                  name="selectedLocation"
                  value={selectedPickLocation}
                  onChange={(e) => setSelectedPickLocation(e.target.value)}
                >
                  {PickDropData.map((location) => (
                    <option key={location.key} value={location.value}>
                      {location.place}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="drop-off">
              <label>
                Drop-off <span className="required">*</span>
                <br />
                <select
                  name="selectedLocation"
                  value={selectedDropLocation}
                  onChange={(e) => setSelectedDropLocation(e.target.value)}
                >
                  {PickDropData.map((location) => (
                    <option key={location.key} value={location.value}>
                      {location.place}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="firstthree">
            <div className="date">
              <label>
                Pick-up <span className="required">*</span>
                <br />{" "}
                <input
                  className="date-input"
                  type="date"
                  name="pickupdate"
                  value={selctedPickDate}
                  onChange={(e) => setSelectedPickDate(e.target.value)}
                />
              </label>
            </div>
            <div className="date-2">
              <label>
                Drop-off <span className="required">*</span> <br />{" "}
                <input
                  className="date-input"
                  type="date"
                  name="pickupdate"
                  value={selctedDropDate}
                  onChange={(e) => setSelectedDropDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button onClick={HandleResCilck} className="search-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bookcar-overlay ${
          showReservatioion ? "showres" : "hideres"
        }`}
      ></div>
      <Reservation
        HandleResClose={HandleResClose}
        showReservatioion={showReservatioion}
        setShowReservation={setShowReservation}
        selectedCar={selectedCar}
        selctedPickDate={selctedPickDate}
        selectedPickLocation={selectedPickLocation}
        selectedDropLocation={selectedDropLocation}
        selctedDropDate={selctedDropDate}
        setShowDone={setShowDone}
        setShowError={setShowError}
        showError={showError}
        handleScroll={handleScroll}
      />
    </div>
  );
}

export default BookCar;
