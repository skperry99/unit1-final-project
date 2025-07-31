import homePic from "../assets/images/home.jpg";

const HomePage = (props) => {
  return (
    <div className="homePage">
      <h2>{props.title}</h2>
      <img src={homePic} width="100%" alt="Shelter staff picture" />
      <p className="homeText">
        This is a quirky, slightly chaotic, yet undeniably loving haven for
        furry, scaly, and feathered friends.
      </p>
    </div>
  );
};

export default HomePage;
