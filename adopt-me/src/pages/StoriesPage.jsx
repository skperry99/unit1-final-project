import { useState } from "react";
import StoryForm from "../components/StoryForm.jsx";
import StoryList from "../components/StoryList.jsx";

const StoriesPage = () => {
  const [allStories, setAllStories] = useState([
    `Chrissy was an amazing cat! -Tyler`,
    `Taz is a sweetheart! -Denise`,
  ]);

  const handleNewStory = (newStory) => {
    setAllStories([...allStories, newStory]);
  };

  return (
    <div>
      <StoryList storyItem={allStories} />
      <StoryForm onSubmit={handleNewStory} />
    </div>
  );
};
export default StoriesPage;
