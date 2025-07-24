import '../styles/footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return(
    <footer className='footer'>
      <div><Link to="/Careers">Careers</Link></div>
      <p className='copyright'>&copy; {new Date().getFullYear()} BARK</p>
    </footer>
  );
}
export default Footer