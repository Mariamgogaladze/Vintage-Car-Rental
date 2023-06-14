import "./contactfield.css";
import call from "./../../images/call.png";
import mail from "./../../images/mail.png";
import logo from "./../../images/logo.png";
import Button from "../../components/button/Button";
function ContactField() {
  return (
    <div className="contactfield-container margin-top">
      <div className="contactfield-information">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h1 className="contactfield-heading">Vintage Car Rentals</h1>
        </div>
        <div className="pink2-gradient"></div>
        <p className="contactfield-heading">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="contact-div">
          <img src={call} alt="mobile phone" />
          <p className="contactfield-text">(+33 6) 123-456-78</p>
        </div>
        <div className="contact-div">
          <img src={mail} alt="mail" />
          <a className="mail-link" href="mailto:example@example.com">
            <p className="contactfield-text">vintagecarrental@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="contactfield-input">
        <div>
          <label>
            Full Name <span className="required">*</span> <br />
            <input
              className="person-input-contact"
              placeholder="Enter your full name"
              type="text"
              autoComplete="on"
              required
            ></input>
          </label>
          <p className="required-text">This field is required</p>
        </div>
        <div>
          <label>
            Email <span className="required">*</span> <br />
            <input
              className="person-input-contact"
              placeholder="Enter your email"
              type="email"
              autoComplete="on"
              required
            ></input>
          </label>
          <p className="required-text">This field is required</p>
        </div>
        <div>
          <label>
            Tell us about it <span className="required">*</span> <br />
            <textarea
              className="person-input-contact"
              placeholder="Write here ..."
              required
            ></textarea>
          </label>
          <p className="required-text">This field is required</p>
        </div>
        <Button text="Send Message" />
      </div>
    </div>
  );
}

export default ContactField;
