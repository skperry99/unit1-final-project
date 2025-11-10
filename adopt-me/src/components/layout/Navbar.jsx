// src/components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import logo from "../../assets/images/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={ROUTES.HOME} end aria-label="Go to Home">
        <img src={logo} id="navLogo" height="60" alt="BARK logo: cat and dog" />
      </NavLink>

      <ul className="navbarList">
        <li>
          <NavLink className="navListItem" to={ROUTES.HOME} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to={ROUTES.ABOUT}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to={ROUTES.CONTACT}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to={ROUTES.ANIMALS}>
            Animals
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to={ROUTES.STORIES}>
            Stories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
