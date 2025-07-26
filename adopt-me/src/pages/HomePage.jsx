import homePic from "../assets/images/home.jpg";

export default function HomePage() {
  return (
    <div className="homePage">
      <h2>Welcome to Bark Avenue Rescue Kennel</h2>
      <img src={homePic} width="100%" alt="Shelter staff picture" />
      <p className="homeText">
        This is a quirky, slightly chaotic, yet undeniably loving haven for
        furry, scaly, and feathered friends.
      </p>
    </div>
  );
}
