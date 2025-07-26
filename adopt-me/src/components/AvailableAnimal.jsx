import { Link } from "react-router-dom";
import AdoptionForm from "./AdoptionForm.jsx";
// import { useState } from "react";

const AvailableAnimal = (props) => {
  // const [animalName, setAnimalName] = useState(null);

  // const handleClick = (param) => {
  //   setAnimalName(param);
  // };

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
      <AdoptionForm animalName={props.name} />
    </div>
  );
};

export default AvailableAnimal;
