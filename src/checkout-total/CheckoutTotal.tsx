import "./checkout-total.css";
import DeliveryDate from "./DeliveryDate.tsx";
import RecurringOrder from "./recurring-order/RecurringOrder.tsx";
import { Item } from "../cart-items/model/Item.tsx";
import { getTotalPriceForProduct } from "../cart-items/getTotalPriceForProduct.tsx";

interface CheckoutTotalProps {
  basket: Item[];
}

function CheckoutTotal({ basket }: CheckoutTotalProps) {
  function getTotalPriceForBasket(): number {
    let total: number = 0;
    basket.forEach((item) => {
      total += getTotalPriceForProduct(basket, item.id);
    });
    return total;
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
    </div>
  );
}

export default CheckoutTotal;
