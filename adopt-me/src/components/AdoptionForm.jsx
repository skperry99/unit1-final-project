import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdoptionForm = () => {
  const { animalName } = useParams();
  const [animalNameForm, setAnimalNameForm] = useState("");

  useEffect(() => {
    setAnimalNameForm(animalName);
  }, [animalName]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      firstName: "",
      lastName: "",
      email: "",
    });
    setShowMessage(true);
    setSubmitMessage(
      `Thank you for your interest in adopting a pet! We will contact you soon.`
    );
  };

  return (
    <div className="formContainer">
      <h2>Adoption Interest</h2>
      <form id="adoptionForm" onSubmit={handleSubmit}>
        <label htmlFor="animalName">Animal Name:</label>
        <input
          type="text"
          id="animalName"
          name="animalName"
          value={animalNameForm}
          onChange={(e) => setAnimalNameForm(e.target.value)}
        />

        <br />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      {showMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default AdoptionForm;
