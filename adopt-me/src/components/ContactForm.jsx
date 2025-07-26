import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setShowMessage(true);
    setSubmitMessage(`Thank you! We will contact you soon.`);
  };

  return (
    <div className="formContainer">
      <h2>Send us a message:</h2>
      <form id="adoptionForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name..."
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address..."
          required
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <label for="comments">Message:</label>
        <textarea
          id="comments"
          name="user_comments"
          rows="5"
          cols="40"
          placeholder="Enter your message here..."
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {showMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default ContactForm;
