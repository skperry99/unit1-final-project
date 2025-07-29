import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <Link to="/Careers">Careers</Link>
        <Link to="/Volunteer">Volunteer</Link>
      </div>
      <div className="footerSocial">
        <FontAwesomeIcon id="instagram" icon="fa-brands fa-square-instagram" />
        <FontAwesomeIcon id="facebook" icon="fa-brands fa-facebook" />
        <FontAwesomeIcon id="twitter" icon="fa-brands fa-square-x-twitter" />
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} BARK</div>
    </footer>
  );
}
export default Footer;
