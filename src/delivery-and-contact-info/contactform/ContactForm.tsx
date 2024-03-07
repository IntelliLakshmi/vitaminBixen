import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import "./contactform.css";
import EmailInputField from "../inputfields/EmailInputField";
import NameInputField from "../inputfields/NameInputField";
import PhoneInputField from "../inputfields/PhoneInputField";

interface ContactFormProps {
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function ContactForm({
  formData,
  setContactAndDeliveryFormData,
}: ContactFormProps) {
  return (
    <div>
      <div>
        <label htmlFor="country-selector">Land</label>
        <select id="selector" disabled={true} name="country">
          <option value="denmark">Danmark</option>
        </select>
      </div>
      <div className="row">
        <div className="row-element-1">
          <NameInputField
            autofocus={true}
            formData={formData}
            formDataField="firstName"
            label="Fornavn"
            value={formData.firstName.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast fornavn"
          />
        </div>
        <div className="row-element-2">
          <NameInputField
            formData={formData}
            formDataField="surname"
            label="Efternavn"
            value={formData.surname.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast efternavn"
          />
        </div>
      </div>
      <EmailInputField
        formData={formData}
        formDataField="email"
        label="Email"
        value={formData.email.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast email-adresse"
      />
      <PhoneInputField
        formData={formData}
        formDataField="phone"
        label="Telefonnummer"
        value={formData.phone.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast telefonnummer f.eks. 12345678"
        minLength={8}
        maxLength={8}
      />
    </div>
  );
}

export default ContactForm;
