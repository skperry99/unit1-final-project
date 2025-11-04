import Main from "../components/Main";

const AnimalsPage = ({ title = "Available Animals" }) => {
  return (
    <section className="animals-page">
      <h2>{title}</h2>
      <Main />
    </section>
  );
};

export default AnimalsPage;