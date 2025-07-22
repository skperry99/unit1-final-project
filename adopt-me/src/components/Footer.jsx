import { Link } from "react-router-dom";

function Footer() {
  return(
    <footer>
      <p>&copy; {new Date().getFullYear()}</p>
      <Link to="/VolunteerPage">Volunteer</Link>
    </footer>
  );
}
export default Footer