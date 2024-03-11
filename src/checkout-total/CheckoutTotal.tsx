import React from 'react';
import "./checkout-total.css";
import DeliveryDate from "./DeliveryDate.tsx";
import CheckoutButton from "./checkout-button/CheckoutButton";
import RecurringOrder from "./recurring-order/RecurringOrder.tsx";
import { Item } from "../cart-items/model/Item.tsx";
import { getTotalPriceForProduct } from "../cart-items/getTotalPriceForProduct.tsx";

interface CheckoutTotalProps {
  basket: Item[];
}

const CheckoutTotal: React.FC<CheckoutTotalProps> = ({ basket }) => {
  function getTotalPriceForBasket(): number {
    let total: number = 0;
    basket.forEach((item) => {
      const productTotal = getTotalPriceForProduct(basket, item.id).totalPrice;
      total += productTotal;
    });
    return total;
  }

  function getTotalRebateForBasket(): number {
    let totalRebate: number = 0;
    basket.forEach((item) => {
      const productTotalRebate = getTotalPriceForProduct(basket, item.id).rebate;
      totalRebate += productTotalRebate;
    });
    return totalRebate;
  }

  const rebate = getTotalRebateForBasket().toFixed(2);
  const totalPrice = getTotalPriceForBasket().toFixed(2); // Ensure it's a string with 2 decimal places
  const VAT = (parseFloat(totalPrice) * 0.2).toFixed(2); // Calculate VAT from the total price

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
      <div className="container">
        <p>Rabat</p>
        <p className="amount">{rebate} kr.</p> {/* Displays the total rebate amount */}
      </div>
      <div className="container total">
        <p>Total beløb</p>
        <p className="amount">{totalPrice} kr.</p> {/* Display the total price */}
      </div>
      <div className="container">
        <p>Heraf moms</p>
        <p className="amount">{VAT} kr.</p> {/* Display the VAT amount */}
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
