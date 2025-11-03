import { Link } from "react-router-dom";

const AvailableAnimal = ({ name, image, blurb }) => {
  return (
    <article className="animalCard">
      <Link to={`/AdoptionFormPage/${name}`}>
        <div>
          <img
            className="animalPic"
            src={image}
            width="200px"
            height="200px"
            alt={`${name} picture`}
          />
          <h3> {name} </h3>
          <h4> {blurb} </h4>
        </div>
      </Link>
    </article>
  );
};

export default AvailableAnimal;
