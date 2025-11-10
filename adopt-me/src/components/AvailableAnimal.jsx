import { Link } from "react-router-dom";

function toParam(value = "") {
  // URL-safe param for the route /adoption/:animalName
  return encodeURIComponent(value.trim().toLowerCase());
}

export default function AvailableAnimal({ name, image, blurb }) {
  const href = `/adoption/${toParam(name)}`;

  return (
    <article className="animalCard">
      {/* Make the whole card the link for easier click/tap target */}
      <Link to={href} className="animalLink" aria-label={`Adopt ${name}`}>
        <figure style={{ margin: 0, textAlign: "center" }}>
          <img
            className="animalPic"
            src={image}
            alt={`${name}`}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <h3 style={{ marginTop: "8px" }}>{name}</h3>
            <p style={{ marginTop: "4px" }}>{blurb}</p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}
