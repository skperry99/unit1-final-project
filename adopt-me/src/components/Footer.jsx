import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <Link to="/Careers">Careers</Link>
        <Link to="/Volunteer">Volunteer</Link>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} BARK</p>
    </footer>
  );
}
export default Footer;
