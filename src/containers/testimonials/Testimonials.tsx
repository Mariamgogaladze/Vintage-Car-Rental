import "./testimonials.css";
import Testimonial from "../../components/testimonial/Testimonial";

function Testimonials() {
  return (
    <div className="testimonials pd-in" id="Testimonials">
      <div className="test-title">
        <h1 className="heading">Reviewed by People</h1>
        <p className="text">Client's Testimonials</p>
        <span className="span">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </span>
      </div>
      <Testimonial />
    </div>
  );
}

export default Testimonials;
