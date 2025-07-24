function AvailableAnimal(props) {

  return (
    <div className="animalCard">
      <img src={ props.image } width="150px" height="150px" alt={`${ props.name } picture`} />
      <h2> { props.name } </h2>
      <p> { props.blurb } </p>
    </div>
  );
};

export default AvailableAnimal;
