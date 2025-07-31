import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} id="navLogo" height={"60px"} alt="cat and dog logo" />

      <ul className="navbarList">
        <li className="navListItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navListItem">
          <Link to="/AboutPage">About</Link>
        </li>
        <li className="navListItem">
          <Link to="/ContactPage">Contact</Link>
        </li>
        <li className="navListItem">
          <Link to="/AnimalsPage">Animals</Link>
        </li>
        <li className="navListItem">
          <Link to="/StoriesPage">Stories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
