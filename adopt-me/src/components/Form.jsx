import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Form = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [animalNameForm, setAnimalNameForm] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { animalName } = useParams();

  let feedback, title, adoptOnly, contactOnly;

  if (animalName) {
    title = "Adoption Interest";
    feedback = `Thank you for your interest in adopting ${animalNameForm}! We will contact you soon.`;
    adoptOnly = "visible";
    contactOnly = "hidden";
  } else {
    title = "Send us a message:";
    feedback = `Thank you! We will contact you soon.`;
    adoptOnly = "hidden";
    contactOnly = "visible";
  }

  useEffect(() => {
    setAnimalNameForm(animalName);
  }, [animalName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setAnimalNameForm("");
    setShowMessage(true);
    setSubmitMessage(feedback);
  };

  return (
    <div className="formContainer">
      <h2>{title}</h2>
      <form id="form" onSubmit={handleSubmit}>
        <div className={adoptOnly}>
          <label htmlFor="animalName">Animal Name:</label>
          <input
            type="text"
            id="animalName"
            name="animalName"
            required
            value={animalNameForm}
            onChange={(e) => setAnimalNameForm(e.target.value)}
          />
        </div>

        <br />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name..."
          required
          value={formData.firstName}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name..."
          required
          value={formData.lastName}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address..."
          required
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <div className={contactOnly}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="40"
            placeholder="Enter your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>

      {showMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default Form;
