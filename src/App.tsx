import './App.css';

function App() {
  return (
    <header className="header">
      <div className='topbarContainer'>
        <div className="logo">
          <span>VitaminBiksen</span> {/* put the logo in here */}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Tænk vitaminer, køb vitamin er" />
            <button type="submit">🔍</button>
        </div>
        <div className="header-right">
        <a href="#business">Erhverv</a>
        <a href="#service">Kundeservice</a>
        </div>
      </div>
      <div className='lowbarContainer'>
        <nav className="nav">
        <a href="#multi">Multi Vitaminer</a>
        <a href="#c">C Vitaminer</a>
        <a href="#d">D Vitaminer</a>
        <a href="#b">B Vitaminer</a>
        <a href="#more">Mere</a>
        </nav>
      </div>
      <div className="cart">
        <button type="submit">🛒</button>
        <span>Kurv</span> {/* ersatte med kruv icon */}
      </div>
      
    </header>
  );
}

export default App;
