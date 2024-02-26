import './checkout-total.css';
import DeliveryDate from './DeliveryDate.tsx';
import CheckoutButton  from './checkout-button/CheckoutButton';
import RecurringOrder from './recurring-order/RecurringOrder.tsx';

interface CheckoutTotalProps {
  total: number;
}

function CheckoutTotal({ total }: CheckoutTotalProps) {
  const VAT =  getVAT(total);
  
  function getVAT(total: number){
    return total*0.25;
  }

  return (
    <div>
      <div className="container">
        <DeliveryDate/>
        <p className="amount">0.00 kr.</p>        
      </div>
      <div className="container">
        <p>Betalingsgebyr</p>
        <p className="amount">0.00 kr.</p>        
      </div>
      <div className="container total">
        <p>Total beløb</p>
        <p>{total}</p>        
      </div>
      <div className="container">
        <p>Heraf moms</p>
        <p>{VAT}</p>        
      </div>
      <div className="container">
        <p></p>
        < RecurringOrder/>
      </div>
      <div className="container">
        <p></p>
        < CheckoutButton/>
      </div>
    </div>
  );
}

export default CheckoutTotal;
