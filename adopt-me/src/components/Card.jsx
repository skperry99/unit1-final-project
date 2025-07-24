function Card({ pic, name, blurb }) {
  return (
    <div className="card">
      <img src={`url(${pic})`} alt={`${name} picture`} />
      <h1> {name} </h1>
      <p> {blurb} </p>
    </div>
  );
}

export default Card;
