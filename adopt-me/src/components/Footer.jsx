import React from 'react';
import '../styles/footer.css'

function Footer() {
  return(
    <footer className='footer'>
      <div>Careers</div>
      <p className='copyright'>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer