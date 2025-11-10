import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} id="navLogo" height={"60px"} alt="cat and dog logo" />

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/animals">Animals</Link></li>
        <li><Link to="/stories">Stories</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;
