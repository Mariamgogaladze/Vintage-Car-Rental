import "./footercomp.css";
import Button from "../button/Button";
function Subscription() {
  return (
    <div className="contact-container">
      <h1 className="footer-heading">SUBSCRIPTION</h1>
      <p className="footer-text">
        Subscribe your Email address for latest news & updates.
      </p>
      <input
        className="footer-input"
        type="text"
        placeholder="Enter Email Adress"
      />
      <Button text={"Submit"} />
      <div className="copyright">
        <p className="copy">
          @2023 All rights reserved. <br /> Author : Mariam Gogaladze
        </p>
      </div>
    </div>
  );
}

export default Subscription;
