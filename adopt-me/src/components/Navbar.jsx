import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/AboutPage">
        <button>About</button>
      </Link>
      <Link to="/AnimalsPage">
        <button>Animals</button>
      </Link>
    </>
  );
}

export default Navbar;
