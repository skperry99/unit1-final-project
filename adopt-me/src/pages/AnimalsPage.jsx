import React from "react";
import { animalList } from "../helpers/animalList";
import Card from "../components/Card";
import "../styles/animals.css";

function AnimalsPage() {
  animalList;
  return (
    <div className="animals">
      <h1 className="animalsTitle">Available Animals</h1>
      <div className="animalCards">
        {animalList.map((Card) => {
          return (
            <Card
              key={Card.id}
              pic={Card.pic}
              name={Card.name}
              blurb={Card.blurb}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AnimalsPage;
