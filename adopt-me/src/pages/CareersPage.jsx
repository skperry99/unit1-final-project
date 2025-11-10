const Careers = (props) => {
  return (
    <div className="careersPage">
      <h2>{props.title}</h2>
      <h3>
        with benefits including unlimited puppy breath and gratuitous purrs
      </h3>
      <ul className="careersList">
        <li className="careersListItem">
          Master of the Crate Escape: Ensure the timely and safe departure of
          residents (into loving homes, of course!).
        </li>
        <li className="careersListItem">
          Negotiator of Nuzzles: Facilitate harmonious interactions between
          residents, some of whom may have strong personalities.
        </li>
        <li className="careersListItem">
          Professional Belly Rubber: Be on standby for immediate deployment of
          tummy rubs and chin scratches, as per resident requirements.
        </li>
        <li className="careersListItem">
          Feast Facilitator: Dispense delicious meals (and sometimes
          questionable snacks smuggled by the more cunning residents) on a
          rigorous schedule.
        </li>
        <li className="careersListItem">
          Environmental Enrichment Expert: Provide stimulating play, comfortable
          spaces, and plenty of squeaky toys to keep residents entertained.
        </li>
        <li className="careersListItem">
          Chief Litter Box Landscaper (for the feline division): Maintain
          pristine accommodations for discerning feline friends.
        </li>
        <li className="careersListItem">
          Emotional Support Human: Be a beacon of comfort and reassurance for
          both residents and the occasional overwhelmed volunteer.
        </li>
      </ul>

      <p>The Purr-fect Candidate Will Possess:</p>
      <ul className="careersList">
        <li className="careersListItem">
          An unwavering love for animals (even those who think "personal space"
          is a myth).
        </li>

        <li className="careersListItem">
          A strong bladder and an even stronger stomach (it's a shelter, after
          all).
        </li>

        <li className="careersListItem">
          A keen eye for a good adoption photo op (bonus points for using props
          and costumes).
        </li>

        <li className="careersListItem">
          Excellent communication skills (especially when mediating arguments
          between a territorial chihuahua and a sassy Siamese).
        </li>

        <li className="careersListItem">
          A desire to make a real difference, one wagging tail or contented purr
          at a time.
        </li>
      </ul>

      <p>
        {" "}
        If you're ready for a job where every day is an adventure, and
        colleagues have fur and four legs, send a resume (and a short story
        about your most memorable animal encounter) to woof@bark.org to apply.
        We are looking forward to meeting you (and so are the residents)!
      </p>
    </div>
  );
};

export default Careers;
