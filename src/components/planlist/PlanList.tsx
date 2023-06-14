import PlanData from "./PlanListData";
import "./planlist.css";
function PlanList() {
  return (
    <div className="planlists-container">
      {PlanData.map((plan) => (
        <div className="planlist-container" key={plan.key}>
          <img className="plan-icon" src={plan.image} alt="icon" />
          <h1 className="box-heading">{plan.title}</h1>
          <p className="box-text">{plan.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanList;
