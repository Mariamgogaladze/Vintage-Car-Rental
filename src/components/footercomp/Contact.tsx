import "./footercomp.css";
import call from "./../../images/call.png";
import mail from "./../../images/mail.png";
function Contact() {
  return (
    <div className="contact-container">
      <h1 className="footer-heading">CAR Rental</h1>
      <p className="footer-text">
        We offers a big range of vehicles for all your driving needs. We have
        the perfect car to meet your needs.
      </p>
      <div className="contact-div">
        <img src={call} alt="mobile phone" />
        <p className="footer-p pointer">(+33 6) 123-456-78</p>
      </div>
      <div className="contact-div">
        <img src={mail} alt="mail" />
        <a className="mail-link" href="mailto:example@example.com">
          <p className="footer-text pointer">vintagecarrental@gmail.com</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
