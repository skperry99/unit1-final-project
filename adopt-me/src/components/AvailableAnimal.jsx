import { Link } from "react-router-dom";

const AvailableAnimal = (props) => {

  return (
    <div>
      <Link to={`/AdoptionFormPage/${props.name}`}>
        <div className="animalCard">
          <img
            className="animalPic"
            src={props.image}
            width="150px"
            height="150px"
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
