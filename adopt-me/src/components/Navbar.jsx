import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/AboutPage">About</Link>
      <Link to="/ContactPage">Contact</Link>
      <Link to="/AnimalsPage">Animals</Link>
    </div>
  );
}

export default Navbar;
