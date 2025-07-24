import AvailableAnimal from "./AvailableAnimal";
import { animals } from "../helpers/animals";

const Main = () => {
  let allAnimals = animals.map((animal) => {
    return (
      <AvailableAnimal
        key={animal.id}
        image={animal.image}
        name={animal.name}
        blurb={animal.blurb}
      />
    );
  });
  return (
    <main>
      <div className="animalsLayout">{allAnimals}</div>
    </main>
  );
};

export default Main;
