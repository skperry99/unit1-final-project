import "../styles/header.css"

const Header = ({ title, imageUrl }) => {
  return (
    <header className="header" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};


export default Header;
