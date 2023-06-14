import Testimonials from "../../containers/testimonials/Testimonials"
import './review.css';

function Review() {
  return (
    <div className="review-container">
       <div className="quote-container padding-in">
       <h1 className="quote">"Vintage cars are not just a mode of transportation; they are a work of art on wheels."</h1>
       </div>
       <Testimonials />
    
    </div>
  )
}

export default Review