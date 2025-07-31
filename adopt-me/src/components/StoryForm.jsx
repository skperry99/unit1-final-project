import { useState } from "react";

const StoryForm = ({ onSubmit }) => {
  const [storyText, setStoryText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (storyText.trim !== "") {
      onSubmit(storyText);
      setStoryText("");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <textarea
          id="storyText"
          name="storyText"
          rows="5"
          cols="40"
          placeholder="Tell us your pet adoption story..."
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;
