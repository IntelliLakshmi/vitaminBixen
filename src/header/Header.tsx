import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="topbarContainer">
        <div className="logo">
          <span>VitaminBixen</span> {/* put the logo in here */}
        </div>
        <div className="search-bar">
          <input
            className="underline"
            type="text"
            placeholder="Tænk vitaminer, køb vitaminer"
          />
          <button type="submit">🔍</button>
        </div>
        <div className="header-right">
          <a href="#business">Erhverv</a>
          <a href="#service">Kundeservice</a>
        </div>
      </div>
      <div className="lowbarContainer">
        <nav className="nav">
          <a href="#multi">Multi Vitaminer</a>
          <a href="#c">C Vitaminer</a>
          <a href="#d">D Vitaminer</a>
          <a href="#b">B Vitaminer</a>
          <div className="more">
            <a href="#more">Mere</a>
          </div>
        </nav>
        <div className="cartHeader">
          <span>Kurv</span> {/* ersatte med kruv icon */}
          <p>🛒</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
