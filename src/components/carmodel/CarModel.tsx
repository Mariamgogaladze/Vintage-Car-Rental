import "./carmodel.css";
import CarModelsData from "./CarModelsData";

function CarModel({ selectedModel }: any) {
  return (
    <div className="carmodel-container">
      {CarModelsData.map(
        (car) =>
          car.model === selectedModel && (
            <div className="carmodel" key={car.key}>
              <img className="car" src={car.image} alt="car" />
              <div className="information">
                <table className="carmodel-table">
                  <tbody>
                    <tr>
                      <td className="first-td price-td">
                        Price / <br /> Rent per day
                      </td>
                      <td className="second-td price ">{car.price}</td>
                    </tr>
                    <tr>
                      <td className="first-td">Model</td>
                      <td className="second-td">{car.model}</td>
                    </tr>
                    <tr>
                      <td className="first-td">Year</td>
                      <td className="second-td">{car.year}</td>
                    </tr>
                    <tr>
                      <td className="first-td">Doors</td>
                      <td className="second-td">{car.doors}</td>
                    </tr>
                    <tr>
                      <td className="first-td">AC</td>
                      <td className="second-td">{car.AC}</td>
                    </tr>
                    <tr>
                      <td className="first-td">Transmission</td>
                      <td className="second-td">{car.transmission}</td>
                    </tr>
                    <tr>
                      <td className="first-td  fuel-td">Fuel</td>
                      <td className="second-td fuellast-td ">{car.fuel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default CarModel;
