import "./reservation.css";
import close from "./../../images/close.png";
import PersInfo from "../../components/personalinfo/PersInfo";

function Reservation({
  showReservatioion,
  setShowReservation,
  HandleResClose,
  selectedCar,
  selctedPickDate,
  selectedPickLocation,
  selectedDropLocation,
  selctedDropDate,
  showError,
  setShowDone,
  setShowError,
  handleScroll,
}: any) {
  return (
    <div
      className={`reservation-container ${
        showReservatioion ? "showres" : "hideres"
      }`}
    >
      <div className="complete-reservation">
        <div className="heading-container">
          <h1 className="reservation-heading">COMPLETE RESERVATION</h1>
          <img
            onClick={HandleResClose}
            className="res-close"
            src={close}
            alt="close"
          />
        </div>
        <p className="reservation-text">
          Upon completing this reservation enquiry, you will receive:
        </p>
        <span className="reservation-span">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </span>
      </div>
      <div className="location-date">
        <p className="reservation-text">
          Location & Date <br /> <br />
          <span className="chosen-car">Car - {selectedCar} </span>
        </p>
        <div>
          <div className="selected">
            <h4>Pick-Up Date & Time</h4>
            <div>
              <span className="chosen-pickup-date">{selctedPickDate}/ </span>
              <input type="time" />
            </div>
          </div>
          <div className="selected">
            <h4>Drop-Off Date & Time</h4>
            <div>
              {" "}
              <span className="chosen-dropoff-date">{selctedDropDate} / </span>
              <input type="time" />
            </div>
          </div>
        </div>
        <div>
          <div className="selected">
            <h4>Pick-Up Location</h4>
            <span className="pickup-location">{selectedPickLocation}</span>
          </div>
          <div className="selected">
            {" "}
            <h4>Drop-Off Location</h4>
            <span className="dropoff-location">{selectedDropLocation}</span>
          </div>
        </div>
      </div>
      <PersInfo
        showError={showError}
        setShowError={setShowError}
        setShowReservation={setShowReservation}
        showReservatioion={showReservatioion}
        handleScroll={handleScroll}
        setShowDone={setShowDone}
      />
    </div>
  );
}

export default Reservation;
