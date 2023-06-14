import "./testimonial.css";
import TestimonialsData from "./TestimonialsData";

function Testimonial() {
  return (
    <div className="testimonial-section">
      {TestimonialsData.map((testimonial) => (
        <div className="testimonial-container" key={testimonial.key}>
            <p className="testimonial-text">
                {testimonial.text}
            </p>
            <div className="person-container">
                <img className="person-image" src={testimonial.image} alt="person"/>
                <div className="pesron-info">
                    <h4 className="person-name">{testimonial.name}</h4>
                    <h5 className="person-location">{testimonial.location}</h5>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
