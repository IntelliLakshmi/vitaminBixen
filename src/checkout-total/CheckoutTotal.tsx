import "./checkout-total.css";
import DeliveryDate from "./DeliveryDate.tsx";
import CheckoutButton from "./checkout-button/CheckoutButton";
import RecurringOrder from "./recurring-order/RecurringOrder.tsx";
import { Item } from ".././Item.tsx";

interface CheckoutTotalProps {
  basket: Item[];
}

function CheckoutTotal({ basket }: CheckoutTotalProps) {
  function getTotalPriceForBasket(): number {
    let total: number = 0;
    basket.forEach((item) => {
      total += getTotalPriceForProduct(item.id);
    });
    return total;
  }

  function getTotalPriceForProduct(productID: string): number {
    const product = basket.find((item) => item.id === productID);
    const giftWrapPrice = product?.giftWrap ? 10 : 0;
    return product ? product.price * product.amount + giftWrapPrice : 0;
  }

  const totalPrice = getTotalPriceForBasket();
  const VAT = (totalPrice * 0.2).toFixed(2);

  return (
    <div className="fullContainer">
      <div className="container">
        <DeliveryDate />
        <p className="amount">0.00 kr.</p>
      </div>
      <div className="container">
        <p>Betalingsgebyr</p>
        <p className="amount">0.00 kr.</p>
      </div>
      <div className="container total">
        <p>Total beløb</p>
        <p>{totalPrice}</p>
      </div>
      <div className="container">
        <p>Heraf moms</p>
        <p>{VAT}</p>
      </div>
      <div className="container">
        <p></p>
        <RecurringOrder />
      </div>
      <div className="container">
        <p></p>
        <CheckoutButton />
      </div>
    </div>
  );
}

export default CheckoutTotal;
