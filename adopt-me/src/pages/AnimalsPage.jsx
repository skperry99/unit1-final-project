import React from "react";
import { animals } from "../helpers/animals";
import AvailableAnimal from "../components/AvailableAnimal";
import "../styles/animals.css";
import Main from "../components/Main";

function AnimalsPage() {
  animals;
  return (
    <div className="animalsPage">
      <h1 className="animalsTitle">Available Animals</h1>
      <Main />
      {/* <div className="animalCards">
        {animals.map((AvailableAnimal) => {
          return (
            <AvailableAnimal
              key={AvailableAnimal.id}
              pic={AvailableAnimal.pic}
              name={AvailableAnimal.name}
              blurb={AvailableAnimal.blurb}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default AnimalsPage;
