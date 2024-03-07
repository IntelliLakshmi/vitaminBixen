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
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function ContactAndDelivery({
  formData,
  setContactAndDeliveryFormData,
}: ContactAndDeliveryProps) {
  const [sameReceiver, setSameReceiver] = useState(true);

  return (
    <div className="formContainer">
      <p className="textSizeLarge bold">Faktureringsoplysninger</p>
      <ContactForm
        formData={formData}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
      />
      <DeliveryForm
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
            formData={formData}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
          />
        </div>
      )}
    </div>
  );
}

export default ContactAndDelivery;
