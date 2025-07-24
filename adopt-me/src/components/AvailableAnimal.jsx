const AvailableAnimal = (props) => {
  let { id, name, image, blurb } = props.animal;

  return (
    <div id={id} className="animalCard">
      <img src={ image } width="150px" height="150px" alt={`${name} picture`} />
      <h1> {name} </h1>
      <p> {blurb} </p>
    </div>
  );
};

export default AvailableAnimal;
