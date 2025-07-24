import shelter from "../assets/images/shelter.jpg";

function ContactPage() {
  return (
    <div className="contactPage">
      <h1 className="contactTitle">CONTACT US</h1>
      <img src={shelter} width={350} height={350} alt="Bark Avenue building" />
      <div className="logistics">
        <p>Address: 999 Doggone-It Street Anytown, NE 90210</p>
        <p>Phone number: 555.867.5309</p>
        <p>
          Monday to Friday: 12 to 6 p.m. Saturday: 10 a.m. to 5 p.m. Sunday: 12
          to 4 p.m.
        </p>
      </div>

      <form id="contactForm" method="POST">
        <fieldset>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <br />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <br />
          <button type="submit"> Send Message</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactPage;
