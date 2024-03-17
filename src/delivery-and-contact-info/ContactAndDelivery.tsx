import { useState } from "react";
import SameDeliveryAddressButton from "./SameDeliveryAddressButton";
import ".././common.css";
import AlternativeReceiverForm from "./AlternativeReceiverForm";
import "./contactanddelivery.css";
import ContactForm from "./contactform/ContactForm";
import DeliveryForm from "./deliveryform/DeliveryForm";
import CompanyForm from "./contactform/CompanyForm";
import { ContactAndDeliveryFormData } from "./model/ContactAndDeliveryFormData";

interface ContactAndDeliveryProps {
  formSubmitted: boolean;
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function ContactAndDelivery({
  formSubmitted,
  formData,
  setContactAndDeliveryFormData,
}: ContactAndDeliveryProps) {
  const [sameReceiver, setSameReceiver] = useState(true);

  return (
    <form>
      <p className="textSizeLarge bold">Faktureringsoplysninger</p>
      <ContactForm
        formSubmitted={formSubmitted}
        formData={formData}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
      />
      <DeliveryForm
        formSubmitted={formSubmitted}
        formData={formData}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
      />
      <CompanyForm
        formData={formData}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
      />
      <SameDeliveryAddressButton
        differentReceiver={sameReceiver}
        setDifferentReceiver={setSameReceiver}
        formData={formData}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
      />
      {!sameReceiver && (
        <div className="alternativeForm">
          <p className="textSizeLarge bold">
            Indtast modtagerens leveringsoplysninger
          </p>
          <AlternativeReceiverForm
            formSubmitted={formSubmitted}
            formData={formData}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
          />
        </div>
      )}
    </form>
  );
}

export default ContactAndDelivery;
