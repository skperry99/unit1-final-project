import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/AboutPage">About</Link>
      <Link to="/ContactPage">Contact</Link>
      <Link to="/AnimalsPage">Animals</Link>
    </nav>
  );
};

export default Navbar;
