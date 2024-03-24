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
          <div className="dropdown">
            <a href="#multi">Multi Vitaminer
              <div className="dropdown-content">
                <a href="#multi1">Multi 1</a>
                <a href="#multi2">Multi 2</a>
                <a href="#multi3">Multi 3</a>
              </div>
            </a>
            
            <a href="#c">C Vitaminer
              <div className="dropdown-content">
                <a href="#multi1">Multi 1</a>
                <a href="#multi2">Multi 2</a>
                <a href="#multi3">Multi 3</a>
              </div>
            </a>

            <a href="#d">D Vitaminer
              <div className="dropdown-content">
                <a href="#multi1">Multi 1</a>
                <a href="#multi2">Multi 2</a>
                <a href="#multi3">Multi 3</a>
              </div>
            </a>

            <a href="#b">B Vitaminer
              <div className="dropdown-content">
                <a href="#multi1">Multi 1</a>
                <a href="#multi2">Multi 2</a>
                <a href="#multi3">Multi 3</a>
              </div>
            </a>
            
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
