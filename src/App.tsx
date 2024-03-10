import Footer from "./footer/Footer.tsx";
import "./common.css";
import BasketList from "./cart-items/CartItems.tsx";
import Header from "./header/Header.tsx";
import CheckoutTotal from "./checkout-total/CheckoutTotal.tsx";
import data from "./data/product.json";
import { useState } from "react";
import { Item } from "./cart-items/model/Item.tsx";

const initialBasket: Item[] = data.map((item) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  currency: item.currency,
  img: item.img,
  amount: 1,
  rebatePercent: item.rebatePercent,
  rebateQuantity: item.rebateQuantity,
  giftWrap: false,
}));

function App() {
  const [basket, setBasket] = useState(initialBasket);

  return (
    <>
      <Header />
      <BasketList basket={basket} setBasket={setBasket} />
      <CheckoutTotal basket={basket} />
      <Footer />
    </>
  );
}

export default App;
