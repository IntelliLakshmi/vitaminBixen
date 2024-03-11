import { useState } from "react";
import FieldRequiredWarning, {
  defaultWarningText,
} from "../FieldRequiredWarning";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import "./inputfield.css";

interface ZipCodeInputFieldProps {
  required?: boolean;
  sameReceiver?: boolean;
  formData: ContactAndDeliveryFormData;
  formDataField: string;
  label: string;
  value: string;
  placeholder: string;
  formSubmitted?: boolean;
  onZipCodeValidated: (zipCode: string) => void;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function ZipCodeInputField({
  required = true,
  sameReceiver = true,
  formData,
  formDataField,
  label,
  value,
  placeholder,
  formSubmitted = false,
  onZipCodeValidated,
  setContactAndDeliveryFormData,
}: ZipCodeInputFieldProps) {
  const [touched, setTouched] = useState(false);
  const [isValidLength, setIsValidLength] = useState(true);
  const [isValidZipCode, setIsValidZipCode] = useState(false);
  const minLength = 4,
    maxLength = 4;

  function handleBlur() {
    setTouched(true);
    setIsValidLength(value.length >= minLength && value.length <= maxLength);

    if (isValidLength) {
      const validateZipCode = async () => {
        try {
          const response = await fetch(
            `https://api.dataforsyningen.dk/postnumre/${value}`
          );
          if (response.ok) {
            setIsValidZipCode(true);
            onZipCodeValidated(value); //will autofill city
          } else {
            setIsValidZipCode(false);
          }
        } catch (error) {
          setIsValidZipCode(false);
        }
      };

      validateZipCode();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    const isValueValid = regex.test(e.target.value);

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

  let warningMessage = "";

  if (!isValidLength && touched) {
    warningMessage = `${label} skal være fra ${minLength} tegn langt.`;
  } else if (!isValidZipCode && isValidLength && touched) {
    warningMessage = "Ugyldigt postnummer.";
  } else if (required && !value) {
    warningMessage = defaultWarningText;
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
      {formSubmitted && warningMessage && (
        <FieldRequiredWarning text={warningMessage} />
      )}
    </div>
  );
}

export default ZipCodeInputField;
