import AvailableAnimal from "./AvailableAnimal";
import { animals } from "../helpers/animals";

const Main = () => {
  return (
    <main className="animals-container">
      <div className="animals-grid">
        {animals?.length ? (
          animals.map(({ id, image, name, blurb }) => (
            <AvailableAnimal
              key={id}
              image={image}
              name={name}
              blurb={blurb}
            />
          ))
        ) : (
          <p>No animals available at the moment.</p>
        )}
      </div>
    </main>
  );
};

export default Main;
