import { useState } from "react";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import FieldRequiredWarning, {
  defaultWarningText,
} from "../FieldRequiredWarning";
import "./inputfield.css";

interface EmailInputFieldProps {
  required?: boolean;
  sameReceiver?: boolean;
  formData: ContactAndDeliveryFormData;
  formDataField: string;
  label: string;
  value: string;
  placeholder: string;
  formSubmitted?: boolean;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function EmailInputField({
  required = true,
  sameReceiver = true,
  formData,
  formDataField,
  label,
  value,
  placeholder,
  formSubmitted = false,
  setContactAndDeliveryFormData,
}: EmailInputFieldProps) {
  const [touched, setTouched] = useState(false);

  function handleBlur() {
    setTouched(true);
  }

  function validateEmail(email: string) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newEmail = e.target.value;
    const isValid = validateEmail(newEmail);

    const updatedFormData = {
      ...formData,
      [formDataField]: {
        ...formData[formDataField as keyof ContactAndDeliveryFormData],
        value: newEmail,
        valid: isValid,
      },
    };

    setContactAndDeliveryFormData(updatedFormData);
  }

  let warningMessage = "";

  if (touched && !formData.email.valid && value) {
    warningMessage = `ugyldig email`;
  } else if ((formSubmitted || touched) && required && !value) {
    warningMessage = defaultWarningText;
  }

  return (
    <div className="input-div">
      <label htmlFor={label}>
        {label}
        {required && "*"}
      </label>
      <input
        type="email"
        name={`${!sameReceiver ? "receiver" : ""}${label}`}
        id={`${!sameReceiver ? "receiver" : ""}${label}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {warningMessage && <FieldRequiredWarning text={warningMessage} />}
    </div>
  );
}

export default EmailInputField;
