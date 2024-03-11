import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import "./contactform.css";
import EmailInputField from "../inputfields/EmailInputField";
import NameInputField from "../inputfields/NameInputField";
import PhoneInputField from "../inputfields/PhoneInputField";

interface ContactFormProps {
  formSubmitted: boolean;
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function ContactForm({
  formSubmitted,
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
            formSubmitted={formSubmitted}
            autofocus={true}
            formData={formData}
            formDataField="firstName"
            label="Fornavn"
            value={formData.firstName.value}
            regex={/^[^0-9]*$/}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast fornavn"
          />
        </div>
        <div className="row-element-2">
          <NameInputField
            formSubmitted={formSubmitted}
            formData={formData}
            formDataField="surname"
            label="Efternavn"
            value={formData.surname.value}
            regex={/^[^0-9]*$/}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast efternavn"
          />
        </div>
      </div>
      <EmailInputField
        formSubmitted={formSubmitted}
        formData={formData}
        formDataField="email"
        label="Email"
        value={formData.email.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast email-adresse"
      />
      <PhoneInputField
        formSubmitted={formSubmitted}
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
