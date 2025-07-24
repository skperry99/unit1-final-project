import shelter from "../assets/images/shelter.jpg";

function ContactPage() {
  return (
    <div className="contactPage">
      <h1>CONTACT US</h1>
      <img src={shelter}  width={350} height={350} alt="Bark Avenue building" />
      <div className="logistics">
        <p>Address: 123 Main Street
          Anytown, NE 98765
          Phone number: 555.123.4567</p>

        <p>Monday to Friday: 12 to 6 p.m.
Saturday: 10 a.m. to 5 p.m.
Sunday: 12 to 4 p.m.</p>
      </div>
    </div>
  );
}

export default ContactPage;
