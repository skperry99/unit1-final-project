import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/AboutPage"><button>About</button></Link>
      <Link to="/AnimalsPage"><button>Animals</button></Link>
    </div>
  );
}

export default Navbar;
