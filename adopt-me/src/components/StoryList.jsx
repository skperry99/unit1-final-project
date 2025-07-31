const StoryList = ({ storyItem }) => {
  return (
    <div>
      <h2>Adoption Stories</h2>
      {storyItem.length === 0 ? (
        <p>No stories yet.</p>
      ) : (
        <ul className="storyList">
          {storyItem.map((story, index) => (
            <li key={index}>{story}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StoryList;
