import { Link } from "react-router-dom";

const AvailableAnimal = (props) => {
  return (
    <div className="animalCard">
      <Link to={`/AdoptionFormPage/${props.name}`}>
        <div>
          <img
            className="animalPic"
            src={props.image}
            width="200px"
            height="200px"
            alt={`${props.name} picture`}
          />
          <h3> {props.name} </h3>
          <h4> {props.blurb} </h4>
        </div>
      </Link>
    </div>
  );
};

export default AvailableAnimal;
