import Button from "../../components/button/Button";
import "./carmodels.css";
import { useState } from "react";
import CarModelsData from "../../components/carmodel/CarModelsData";
import CarModel from "../../components/carmodel/CarModel";
function CarModels() {
  const [selectedModel, setSelectedModel] = useState(CarModelsData[7].model);
  function HandleButtonClick(model: any) {
    setSelectedModel(model);
  }
  return (
    <div className="carmodels-container padding-in">
      <div className="cardmodels-title">
        <h1 className="heading">Vintage Vehicle Models</h1>
        <p className="text">Explore our Classic Rental Fleet</p>
        <span className="span">
          Choose from a variety of amazing vintage vehicles to rent for your
          next nostalgic adventure or timeless business trip.
        </span>
      </div>
      <div className="model-container">
        <div className="car-buttons">
          <Button
            onButtonClick={() => HandleButtonClick("Chevrolet Camaro")}
            text={"Chevrolet Camaro"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Ford Thunderbird")}
            text={"Ford Thunderbird"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Ford Mustang blue")}
            text={"Ford Mustang blue"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Ford Mustang")}
            text={"Ford Mustang"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Jaguar E-Type")}
            text={"Jaguar E-Type"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Lamborghini Miura")}
            text={"Lamborghini Miura"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Volkswagen Beetle Green")}
            text={"Volkswagen Beetle Green"}
          />
          <Button
            onButtonClick={() => HandleButtonClick("Volkswagen Beetle")}
            text={"Volkswagen Beetle"}
          />
        </div>
        <CarModel selectedModel={selectedModel} />
      </div>
    </div>
  );
}

export default CarModels;
