import { useState } from "react";
import StoryForm from "../components/StoryForm.jsx";
import StoryList from "../components/StoryList.jsx";

export default function StoriesPage() {
  const [stories, setStories] = useState([
    "Chrissy was an amazing cat! — Tyler",
    "Taz is a sweetheart! — Denise",
  ]);

  const handleNewStory = (newStory) => {
    // newest first feels nicer
    setStories((prev) => [newStory, ...prev]);
  };

  return (
    <section className="storiesPage" aria-labelledby="stories-page-heading">
      <h2 id="stories-page-heading" style={{ textAlign: "center" }}>
        Adoption Stories
      </h2>

      <StoryList stories={stories} />
      <StoryForm onSubmit={handleNewStory} />
    </section>
  );
}
