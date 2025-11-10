export default function StoryList({ stories = [] }) {
  const hasStories = Array.isArray(stories) && stories.length > 0;

  return (
    <section aria-labelledby="stories-heading" style={{ textAlign: "center" }}>
      <h2 id="stories-heading">Adoption Stories</h2>

      {hasStories ? (
        <ul className="storyList" aria-live="polite">
          {stories.map((story, idx) => (
            <li key={`${idx}-${story.slice(0, 24)}`}>{story}</li>
          ))}
        </ul>
      ) : (
        <p role="status" aria-live="polite">
          No stories yet.
        </p>
      )}
    </section>
  );
}
