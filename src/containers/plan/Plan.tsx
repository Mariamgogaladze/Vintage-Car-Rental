import PlanList from "../../components/planlist/PlanList";
import "./plan.css";
function Plan() {
  return (
    <div className="plan-container padding-in">
      <h1 className="plan-container-heading">
        <span className="plan-container-span">
          Plan your vintage-style trip now
        </span>{" "}
        <br />
        Quick & easy classic car rental
      </h1>
      <PlanList />
    </div>
  );
}

export default Plan;
