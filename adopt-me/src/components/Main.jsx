import AvailableAnimal from "./AvailableAnimal";
import { animals } from "../helpers/animals";

const Main = () => {
  return (
    <main>
      <div className="main">
        <AvailableAnimal animal={animals[0]} />
        <AvailableAnimal animal={animals[1]} />
        <AvailableAnimal animal={animals[2]} />
      </div>
    </main>
  );
};

export default Main;
