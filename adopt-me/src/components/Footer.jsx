import '../styles/footer.css'

function Footer() {
  return(
    <footer className='footer'>
      <div>Careers</div>
      <p className='copyright'>&copy; {new Date().getFullYear()} BARK</p>
    </footer>
  );
}
export default Footer