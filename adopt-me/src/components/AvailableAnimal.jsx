function AvailableAnimal(props) {
  return (
    <div className="animalCard">
      <img
        className="animalPic"
        src={props.image}
        width="150px"
        height="150px"
        alt={`${props.name} picture`}
      />
      <h2> {props.name} </h2>
      <h4> {props.blurb} </h4>
    </div>
  );
}

export default AvailableAnimal;
