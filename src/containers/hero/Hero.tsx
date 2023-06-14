import "./hero.css";
import bgimage from "./../../images/bgimage.png";
import Button from "../../components/button/Button";
import Benefits from "../whyus/Benefits";
import BookCar from "../bookcar/BookCar";
import Plan from "../plan/Plan";
import CarModels from "../cardmodels/CarModels";
import Testimonials from "../testimonials/Testimonials";
import FAQ from "../faq/FAQ";

function Hero({ handleScroll }: any) {
  return (
    <div>
      <div className="hero-container padding-in">
        <div className="introduction">
          <h1 className="introduction-heading">
            Embark on a Nostalgic Journey and Enjoy{" "}
            <span className="introduction-span"> Big Savings</span> with Our
            Vintage Car Rentals
          </h1>
          <p className="introduction-text">
            Step into a Timeless Adventure.{" "}
            <span className="introduction-span">Unbeatable Prices</span>,
            Unlimited Miles, and Flexible Pick-up Options for Your Dream Vintage
            Car Rental.
          </p>
          <div className="intro-buttons">
            <a href="#bookride">
              <Button text={"Book Ride"} />
            </a>
            <a href="#benefits">
              <Button text={"Learn More"} />
            </a>
          </div>
        </div>
        <div>
          <img
            className="background-image"
            src={bgimage}
            alt="background car"
          />
          <div className="pink-gradient"></div>
        </div>
      </div>
      <BookCar handleScroll={handleScroll} />
      <Plan />
      <CarModels />
      <Benefits />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default Hero;
