import './checkout-total.css';
import DeliveryDate from './DeliveryDate.tsx';
import CheckoutButton  from './checkout-button/CheckoutButton';
import RecurringOrder from './recurring-order/RecurringOrder.tsx';

function CheckoutTotal() {
  return (
    <>
    <div className="container">
      <p className="delivery">Fragt PostNord forventet levering {DeliveryDate()}</p>
      <p className="amount">0.00 kr.</p>        
    </div>
    <div className="container">
      <p>Betalingsgebyr</p>
      <p className="amount">0.00 kr.</p>        
    </div>
    <div className="container total">
      <p>Total beløb</p>
      <p>0.00 kr.</p>        
    </div>
    <div className="container">
      <p>Heraf moms</p>
      <p>0.00 kr.</p>        
    </div>
    <div className="container">
      <p></p>
      < RecurringOrder/>
    </div>
    <div className="container">
      <p></p>
      < CheckoutButton/>
    </div>
    </>
  );
}

export default CheckoutTotal;
