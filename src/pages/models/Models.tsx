import "./models.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import FAQ from "../../containers/faq/FAQ";
import CarModelsData from "../../components/carmodel/CarModelsData";

function Models() {
  return (
    <div>
    <div className="models-container padding-in ">
      {CarModelsData.map((car) => (
        <div className="each-model" key={car.key}>
          <img className="model-image" src={car.image} alt="model" />
          <div className="heading-text">
            <h2 className="model-heading"> Model : {car.model}</h2>
            <p className="price-text">Price / Rent per day : {car.price}</p>
          </div>
          <div className="each-text">
            <p className="description-text">Year : {car.year}</p>
            <p className="description-text">
              Transmission : {car.transmission}
            </p>
          </div>
          <div className="each-text last">
            <p className="description-text">Door : {car.doors}</p>
            <p className="description-text"> Fuel : {car.fuel}</p>
          </div>
          <div className="bookride-button">
            <Link to={"/"}>
              <Button text="BOOK RIDE" />
            </Link>
          </div>
        </div>
      ))}
    </div>
    <FAQ/>
    </div>
  );
}
export default Models;
