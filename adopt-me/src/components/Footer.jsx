import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footerSocial">
        <li className="footerSocialItem">
          <FontAwesomeIcon
            id="instagram"
            icon="fa-brands fa-square-instagram"
            flip="both"
          />
        </li>
        <li className="footerSocialItem">
          <FontAwesomeIcon id="facebook" icon="fa-brands fa-facebook" />
        </li>
        <li className="footerSocialItem">
          <FontAwesomeIcon
            id="twitter"
            icon="fa-brands fa-square-x-twitter"
          />
        </li>
      </ul>
      <ul className="footerLinks">
        <li className="footerListItem">
          <Link to="/Careers">Careers</Link>
        </li>
        <li className="footerListItem">
          <Link to="/Volunteer">Volunteer</Link>
        </li>
      </ul>

      <div className="copyright">&copy; {new Date().getFullYear()} BARK</div>
    </footer>
  );
};
export default Footer;
