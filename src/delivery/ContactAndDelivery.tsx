import { useState } from "react";
import CompanyForm from "./contactform/CompanyForm";
import SameDeliveryAddressButton from "./SameDeliveryAddressButton";
import { ContactAndDeliveryFormData } from "./model/ContactAndDeliveryFormData";
import ContactForm from "./contactform/ContactForm";
import ".././common.css";
import AlternativeReceiverForm from "./AlternativeReceiverForm";
import DeliveryForm from "./deliveryform/DeliveryForm";
import "./contactanddelivery.css";

function ContactAndDelivery() {
  const [formData, setContactAndDeliveryFormData] =
    useState<ContactAndDeliveryFormData>({
      country: { value: "denmark" },
      firstName: { value: "" },
      surname: { value: "" },
      email: { value: "" },
      streetNameAndNumber: { value: "" },
      zipCode: { value: "" },
      city: { value: "" },
      phone: { value: "" },
      company: { value: "" },
      cvr: { value: "" },

      recCountry: { value: "denmark" },
      recFirstName: { value: "" },
      recSurname: { value: "" },
      recStreetNameAndNumber: { value: "" },
      recZipCode: { value: "" },
      recCity: { value: "" },
      recPhone: { value: "" },
    });

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
