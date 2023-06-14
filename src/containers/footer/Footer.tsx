import "./footer.css";
import WorkingHours from "../../components/footercomp/WorkingHours";
import Company from "../../components/footercomp/Company";
import Contact from "../../components/footercomp/Contact";
import Subscription from "../../components/footercomp/Subscription";
function Footer() {
  return (
    <div className="footer-container padding-in">
      <div className="footer-little-container">
        <Contact />
        <Company />
      </div>
      <div className="footer-little-container">
        <WorkingHours />
        <Subscription />
      </div>
    </div>
  );
}

export default Footer;
