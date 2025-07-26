import shelter from "../assets/images/shelter.jpg";
import ContactForm from "../components/ContactForm";
import Form from "../components/Form";

function ContactPage() {
  return (
    <div className="contactPage">
      <h2 className="contactTitle">CONTACT US</h2>
      <img src={shelter} width="45%" alt="Bark Avenue building" />
      <div className="logistics">
        <p>Address: 999 Doggone-It Street Anytown, NE 90210</p>
        <p>Phone number: 555.867.5309</p>
        <p>
          Monday to Friday: 12 to 6 p.m. <br />
          Saturday: 10 a.m. to 5 p.m. <br />
          Sunday: 12 to 4 p.m.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default ContactPage;
