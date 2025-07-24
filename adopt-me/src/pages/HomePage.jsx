import Header from "../components/Header";
import "../styles/home.css";
import banner from "../assets/images/banner-graphic.jpg";

export default function HomePage() {
  return (
    <div className="homePage">
      <Header title="Bark Avenue Rescue Kennel" imageUrl={banner} />
      <p className="homeText">
        Welcome to Bark Avenue Rescue Kennel. This is a quirky, slightly
        chaotic, yet undeniably loving haven for furry, scaly, and feathered
        friends.
      </p>
    </div>
  );
}
