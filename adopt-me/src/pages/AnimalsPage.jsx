import Main from "../components/Main";

function AnimalsPage(props) {
  return (
    <div className="animalsPage">
      <h2>{props.title}</h2>
      <Main />
    </div>
  );
}

export default AnimalsPage;
