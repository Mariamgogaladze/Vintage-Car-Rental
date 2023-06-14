import "./personalinfo.css";
import PersInput from "./PersInput";
import { useState } from "react";

interface PersInfoProps {
  showError: boolean;
  setShowError: any;
  setShowReservation: any;
  showReservatioion: any;
  handleScroll: any;
  setShowDone: any;
}

function PersInfo({
  showError,
  setShowError,
  setShowReservation,
  showReservatioion,
  handleScroll,
  setShowDone,
}: PersInfoProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleReserveClick = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phoneNumber.trim() === "" ||
      age.trim() === "" ||
      email.trim() === "" ||
      address.trim() === "" ||
      city.trim() === "" ||
      zipCode.trim() === ""
    ) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowReservation(!showReservatioion);
      handleScroll(false);
      setShowDone(true);
    }
  };
  return (
    <div className="personalinfo-container">
      <div className="person-div">
        <div className="input-wrapper">
          <PersInput
            label={"First Name"}
            type={"text"}
            placeholder={"Enter your first name"}
            value={firstName}
            onChange={setFirstName}
          />
        </div>
        <div className="input-wrapper">
          <PersInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your last name"}
            value={lastName}
            onChange={setLastName}
          />
        </div>
      </div>
      <div className="person-div">
        <div className="input-wrapper">
          <PersInput
            label={"Phone Number"}
            type={"tel"}
            placeholder={"Enter your phone number"}
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
        <div className="input-wrapper">
          <PersInput
            label={"Age"}
            type={"text"}
            placeholder={"Enter your age"}
            value={age}
            onChange={setAge}
          />
        </div>
      </div>
      <div className="person-div">
        <div className="input-wrapper">
          <PersInput
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className="input-wrapper">
          <PersInput
            label={"Address"}
            type={"text"}
            placeholder={"Enter your address"}
            value={address}
            onChange={setAddress}
          />
        </div>
      </div>
      <div className="person-div">
        <div className="input-wrapper">
          <PersInput
            label={"City"}
            type={"text"}
            placeholder={"Enter your city"}
            value={city}
            onChange={setCity}
          />
        </div>
        <div className="input-wrapper">
          <PersInput
            label={"Zip code"}
            type={"text"}
            placeholder={"Enter your zip code"}
            value={zipCode}
            onChange={setZipCode}
          />
        </div>
      </div>
      <h5 className={`error-message ${showError ? "show" : ""}`}>
        All fields required!
      </h5>
      <div className="checkbox-container">
        <label>
          <input className="checkbox-input" type="checkbox" />
          Please send me latest news and updates
        </label>
        <button onClick={handleReserveClick} className="reserve-bitton">
          Reserve Now
        </button>
      </div>
    </div>
  );
}

export default PersInfo;
