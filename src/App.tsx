import Footer from './Footer.tsx';
import './css/stylesheet.css'
import BasketList from "./pageelements/CartItems.tsx";
import Header from "./Header.tsx";


function App() {
  return (
    <>
      <Header/>
      <BasketList/>
      <Footer/>
    </>
  )
}

export default App;
