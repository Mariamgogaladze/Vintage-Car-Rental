import "./nav.css";
import "../../index.css";
import logo from "./../../images/logo.png";
import menu from "./../../images/menu.png";
import close from "./../../images/close.png";
import Button from "../../components/button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  function HanldeClick() {
    setShowMenu(!showMenu);
  }
  const handleCloseBtn = () => {
    setShowMenu(false);
  };
  return (
    <div className="navigation-container padding-in">
      <div className="image-container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="company-title">
          <span className="title-span">Vintage</span>
          <br />
          Car Rentals
        </h1>
      </div>
      <div>
        <img
          onClick={HanldeClick}
          className={`menu ${showMenu ? "hide" : ""}`}
          src={menu}
          alt="menu"
        />
      </div>
      <div className={`list-container ${showMenu ? "show" : "hide"}`}>
        <ul className="list-container-ul">
          <li
            onClick={handleCloseBtn}
            className={`list-item-close ${showMenu ? "show" : "hide"}`}
          >
            <img src={close} alt="close" />
          </li>
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/About">About</Link>
          </li>
          <li className="list-item">
            <Link to="/Models">Models</Link>
          </li>
          <li className="list-item">
            <Link to="/Review">Review</Link>
          </li>
          <li className="list-item">
            <Link to="/Team">Our Team</Link>
          </li>
          <li className="list-item">
            <Link to="/ContactField">Contact</Link>
          </li>
        </ul>
        <div className="button-container">
          <button className="signin">Sign in</button>
          <Button text={"Sign up"} />
        </div>
      </div>
      <div className={`overlay ${showMenu ? "display" : "hide"}`}></div>
    </div>
  );
}

export default Nav;
