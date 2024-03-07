import { useState } from "react";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import FieldValidationWarning from "../FieldRequiredWarning";
import "./inputfield.css";

interface EmailInputFieldProps {
  required?: boolean;
  sameReceiver?: boolean;
  formData: ContactAndDeliveryFormData;
  formDataField: string;
  label: string;
  value: string;
  placeholder: string;
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
  setContactAndDeliveryFormData,
}: EmailInputFieldProps) {
  const [touched, setTouched] = useState(false);

  function handleBlur() {
    setTouched(true);
  }

  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
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
      {touched && !formData.email.valid && value && (
        <FieldValidationWarning text="ugyldig email" />
      )}
      {touched && required && !value && <FieldValidationWarning />}
    </div>
  );
}

export default EmailInputField;
