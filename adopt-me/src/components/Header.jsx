const Header = ({ title, imageUrl }) => {
  return (
    <header className="header" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="headerTitle">{title}</h1>
    </header>
  );
};

export default Header;
