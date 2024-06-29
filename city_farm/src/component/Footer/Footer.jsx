import logoImg from "./logo.png";
import "./FooterStyle.css";
import linkedInIcon from "./LinkedIn.png";
import instgramIcon from "./instgram.png";
import xIcon from "./x.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div className="footerHolder">
      <hr className="footerHR" />

      <div className="footerText">
        <div className="navBar-Links">
          <ul>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Home
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/about" className="footer-links">
                About
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/categroies" className="footer-links">
                Categroies
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Media
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            The establishment of CityFarm, a family business that is being
            passed down from father to son, began in 1964 with the help of an
            outstanding team of industry professionals with extensive experience
            in Spices, Juices, frozen food and vegetable processing.
          </p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>+1 800.719.9941</p>
          <p>12 Bay 50th Street, Brooklyn, New York 11214, United States</p>
        </div>

        <div className="footerImg">
          <a href="#Top">
            {" "}
            <img
              src={logoImg}
              alt="Logo"
              className="logo"
              onClick={scrollToTop()}
            />
          </a>
        </div>
      </div>

      <hr className="footerHR" />
      <div className="socialmedia">
        <a href="https://www.linkedin.com/company/city-farm-usa/">
          {" "}
          <img src={linkedInIcon} alt="LinkedIn" className="socialImage" />
        </a>
        <a href="https://www.facebook.com/cityfarmusa">
          {" "}
          <img src={instgramIcon} alt="Instagram" className="socialImage" />
        </a>
        <a href="https://twitter.com/cityfarmusa">
          {" "}
          <img src={xIcon} alt="X" className="socialImage" />
        </a>
      </div>
      <div className="CopyRight">
        <p>Copyright © 1964 - {currentYear} CITY FARM - All Rights Reserved.</p>
        <p>City Farm is a Registeed USA Trademark</p>
      </div>
    </div>
  );
};

export default Footer;
