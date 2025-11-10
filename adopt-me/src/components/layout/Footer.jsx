import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-social">
        <li>
          <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
        </li>
      </ul>

      <ul className="footer-links">
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
      </ul>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} BARK
      </p>
    </footer>
  );
};

export default Footer;