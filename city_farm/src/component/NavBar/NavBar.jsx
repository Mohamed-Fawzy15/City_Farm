import LogoImg from "./logo.png";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();
  // navigate("/about", { replace: true });
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={navbar ? "nav-bar bgOpacity" : "nav-bar"}>
      <div className="navImg">
        <Link to="/">
          <img src={LogoImg} alt="logo" className="logoImg" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/categroies"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Categroies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/media"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Media
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
