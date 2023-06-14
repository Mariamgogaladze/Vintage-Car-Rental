import "./benefits.css";
import Button from "../../components/button/Button";
import Topic from "../../components/topic/Topic";
import bgimage from "./../../images/bg.png";

function Benefits() {
  return (
    <div className="benefits-main" id="benefits">
      <div className="h3-container padding-in">
        <h3>Save big with our cheap car rental</h3>
      </div>
      <div className="benefits-image-container mg-in">
        <img className="benefits-image" src={bgimage} alt="car" />
        <div className="gradient"></div>
        <div className="benefits-introduction padding-in">
          <h1 className="benefits-heading">
            <span className="intro-span"> Why Choose Us</span> <br />
            Best valued deals you will ever find
          </h1>
          <p className="benefits-text">
            Discover the finest vintage and classic deals that will exceed your
            expectations. We are committed to offering you unparalleled value
            for your money, ensuring that you indulge in top-notch services and
            products without compromising your budget. Our exclusive deals are
            meticulously crafted to provide you with an unforgettable renting
            experience. Don't let this golden opportunity slip away seize the
            moment to save extravagantly in true vintage style.
          </p>
          <div className="intro-buttons">
            <Button text={"Find Details"} />
          </div>
        </div>
      </div>
      <div className="benefits-container padding-in">
        <Topic />
      </div>
    </div>
  );
}

export default Benefits;
