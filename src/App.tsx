import './App.css';

function App() {
  return (
    <header className="header">
      <div className="logo">
        <span>VitaminBiksen</span> {/* put ind logo */}
      </div>
      <nav className="nav">
        <a href="#multi">Multi Vitaminer</a>
        <a href="#c">C Vitaminer</a>
        <a href="#d">D Vitaminer</a>
        <a href="#b">B Vitaminer</a>
        <a href="#more">Mere</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Tænk vitaminer, køb vitaminer" />
        <button type="submit">🔍</button>
      </div>
      <div className="header-right">
        <a href="#business">Erhverv</a>
        <a href="#service">Kundeservice</a>
        <div className="cart">
          <span>Kurv</span> {/* Replace with cart icon */}
        </div>
      </div>
    </header>
  );
}

export default App;
