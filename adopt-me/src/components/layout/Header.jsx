const Header = ({ title = "Bark Avenue Rescue Kennel", imageUrl }) => {
  return (
    <header
      className="header"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
