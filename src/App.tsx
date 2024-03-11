import Footer from "./footer/Footer.tsx";
import "./common.css";
import BasketList from "./cart-items/CartItems.tsx";
import Header from "./header/Header.tsx";
import CheckoutTotal from "./checkout-total/CheckoutTotal.tsx";
import { useState } from "react";
import ContactAndDelivery from "./delivery-and-contact-info/ContactAndDelivery.tsx";
import CheckoutButton from "./checkout-button/CheckoutButton.tsx";
import Delivery from "./delivery/Delivery.tsx";
import Payment from "./payment/Payment.tsx";
import { toggleContactAndDelivery } from "./show-component-state/toggleShownComponent.tsx";
import { ContactAndDeliveryFormData } from "./delivery-and-contact-info/model/ContactAndDeliveryFormData.tsx";
import { initialBasket } from "./data/initialBasket.tsx";
import { initialFormData } from "./data/initialFormData.tsx";
import { isFormDataValid } from "./utils/IsFormDataValid.tsx";
import { ContactAndDeliveryState } from "./show-component-state/ContactAndDeliveryState.tsx";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [basket, setBasket] = useState(initialBasket);
  const [formData, setContactAndDeliveryFormData] =
    useState<ContactAndDeliveryFormData>(initialFormData);
  const [contactAndDeliveryState, setContactAndDeliveryState] =
    useState<ContactAndDeliveryState>(
      ContactAndDeliveryState.ContAndDelInfoVisible
    );

  function handleCheckoutClick() {
    if (isFormDataValid(formData)) {
      toggleContactAndDelivery(setContactAndDeliveryState);
    } else {
      setFormSubmitted(true);
    }
  }

  return (
    <>
      <Header />
      <div className="app">
        <BasketList basket={basket} setBasket={setBasket} />
        <CheckoutTotal basket={basket} />
        {contactAndDeliveryState ===
          ContactAndDeliveryState.ContAndDelInfoVisible && (
          <ContactAndDelivery
            formSubmitted={formSubmitted}
            formData={formData}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
          />
        )}
        {contactAndDeliveryState ===
          ContactAndDeliveryState.DeliveryVisible && <Delivery />}
        {contactAndDeliveryState === ContactAndDeliveryState.PaymentVisible && (
          <Payment />
        )}
        <CheckoutButton onClick={handleCheckoutClick} />
      </div>
      <Footer />
    </>
  );
}

export default App;
