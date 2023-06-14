import './about.css';
import paris from './../../images/paris.png';
import Plan from '../../containers/plan/Plan';

function About() {
  return (
    <div>
    <div className='about-container padding-in '>
      <div>
        <img className='company-image' src={paris} alt="company"/>
      </div>
      <div className='about-text'>
        <h1 className='heading'>Discover the Story of Paris Vintage Wheels: A Journey into Classic Car Elegance</h1>
      <p className='text'>   Welcome to our vintage car rental company, located in the heart of Paris! We are passionate about classic cars and dedicated to providing a unique and memorable experience for car enthusiasts.<br/> <br/> Our company was founded with the vision of bringing the charm and elegance of vintage cars to modern times. We believe that driving a classic car is more than just a mode of transportation—it's a journey through history and a celebration of timeless beauty. <br/> <br/>With our extensive collection of meticulously maintained vintage cars, you can indulge in the nostalgia of a bygone era. Whether you're looking to explore the picturesque streets of Paris, make a grand entrance at a special event, or simply enjoy a leisurely drive, our fleet of classic vehicles is at your disposal.  <br/> <br/>Our team of experienced professionals is here to assist you in selecting the perfect car that suits your preferences and needs. We ensure that each vehicle is in impeccable condition, ready to deliver a smooth and exhilarating ride.<br/></p></div>
    </div>
    <Plan/>
    </div>
  )
}

export default About