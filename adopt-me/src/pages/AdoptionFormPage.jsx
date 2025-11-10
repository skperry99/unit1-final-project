import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function AdoptionFormPage() {
  const { animalName } = useParams();
  const prettyName = animalName ? decodeURIComponent(animalName) : "";

  return (
    <section className="adoptionPage" aria-labelledby="adoption-heading">
      <h2 id="adoption-heading">
        {prettyName ? `Adopt ${prettyName}` : "Adoption Interest"}
      </h2>
      <Form />
    </section>
  );
}
