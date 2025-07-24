import "../styles/about.css";
import shelter2 from "../assets/images/shelter2.jpg";

function AboutPage() {
  return (
    <div className="aboutPage">
      <img src={shelter2} width="700px" alt="Bark Avenue building" />
      <div className="aboutText">
        <h1 className="aboutTitle">ABOUT US</h1>
        <p>
          The shelter is home to a delightful mix of personalities. There's the
          "energetic enthusiast" who can outrun a cheetah, the "lap-loving
          legend" who thinks a bed in your room is "awesome," but sleeping in
          the bed with you is "better", and the "mystery meowser" whose purrs
          are as enchanting as they are puzzling. Special residents: Ralphie the
          "Fire-Breathing Demon": Ralphie is a terror in a somewhat small
          package. He may be a "whole jerk," but he's our jerk, and we believe
          in him. Eddie the Terrible: He's cute, fluffy, and a "little bit
          tubby," but don't be fooled. Eddie is socially awkward and has
          specific sleeping demands that involve absolutely no crates.
        </p>
        <p>
          Our mission is simple: to connect unique residents with equally unique
          humans who understand that "rescued is our favorite breed". The
          shelter focuses on finding the perfect match, even if it means
          enduring a few "symphonies of protest" from Eddie. Ready to join the
          chaos and cuddles? If you're looking for a companion who will keep you
          entertained, occasionally challenge your sanity, and provide endless
          love, you've come to the right place. Visit Bark Avenue Rescue Kennel,
          and find your purr-fectly imperfect match!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
