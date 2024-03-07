import { useState } from "react";
import FieldRequiredWarning from "../FieldRequiredWarning";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import "./inputfield.css";

interface NumericInputFieldProps {
  required?: boolean;
  sameReceiver?: boolean;
  formData: ContactAndDeliveryFormData;
  formDataField: string;
  label: string;
  value: string;
  placeholder: string;
  maxLength: number;
  minLength: number;
  formSubmitted?: boolean;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function NumericInputField({
  required = true,
  sameReceiver = true,
  formData,
  formDataField,
  label,
  value,
  placeholder,
  minLength,
  maxLength,
  formSubmitted = false,
  setContactAndDeliveryFormData,
}: NumericInputFieldProps) {
  const [touched, setTouched] = useState(false);
  const [isValidLength, setIsValidLength] = useState(true);

  function handleBlur() {
    setTouched(true);
    setIsValidLength(value.length >= minLength && value.length <= maxLength);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    const isValueValid =
      regex.test(e.target.value) &&
      e.target.value.length >= minLength &&
      e.target.value.length <= maxLength;

    if (isValueValid || e.target.value === "") {
      const updatedFormData = {
        ...formData,
        [formDataField]: {
          ...formData[formDataField as keyof ContactAndDeliveryFormData],
          value: e.target.value,
          valid: isValueValid,
        },
      };

      setContactAndDeliveryFormData(updatedFormData);
    }
  }

  return (
    <div className="input-div">
      <label htmlFor={label}>
        {label}
        {required && "*"}
      </label>
      <input
        type="text"
        name={`${!sameReceiver ? "receiver" : ""}${label}`}
        id={`${!sameReceiver ? "receiver" : ""}${label}`}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && !isValidLength && (
        <FieldRequiredWarning
          text={`Ugyldig længde. ${label} skal være fra ${minLength} tegn til ${maxLength} tegn lang.`}
        />
      )}
      {(formSubmitted || (touched && required)) && !value && (
        <FieldRequiredWarning />
      )}
    </div>
  );
}

export default NumericInputField;
