import Footer from "./Footer.tsx";
import "./css/stylesheet.css";
import BasketList from "./pageelements/CartItems.tsx";
import Header from "./Header.tsx";
import CheckoutTotal from "./checkout-total/CheckoutTotal.tsx";
import data from "../data/product.json";
import { useState } from "react";

interface ItemProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  img: string;
  amount: number;
  giftWrap: boolean;
}
const initialBasket: ItemProps[] = data.map((item) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  currency: item.currency,
  img: item.img,
  amount: 1,
  giftWrap: false,
}));

function App() {
  const [basket, setBasket] = useState(initialBasket);

  return (
    <>
      <Header />
      <BasketList />
      <CheckoutTotal />
      <Footer />
    </>
  );
}

export default App;
