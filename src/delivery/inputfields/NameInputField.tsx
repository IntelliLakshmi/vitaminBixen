import { useEffect, useRef, useState } from "react";
import FieldRequiredWarning from "../FieldRequiredWarning";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import "./inputfield.css";

interface NameInputFieldProps {
  autofocus?: boolean;
  required?: boolean;
  sameReceiver?: boolean;
  formData: ContactAndDeliveryFormData;
  formDataField: string;
  label: string;
  value: string;
  placeholder: string;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function NameInputField({
  autofocus = false,
  required = true,
  sameReceiver = true,
  formData,
  formDataField,
  label,
  value,
  placeholder,
  setContactAndDeliveryFormData,
}: NameInputFieldProps) {
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  function handleBlur() {
    if (!value && required) {
      setTouched(true);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedFormData = {
      ...formData,
      [formDataField]: {
        ...formData[formDataField as keyof ContactAndDeliveryFormData],
        value: e.target.value,
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
        ref={inputRef}
        type="text"
        name={`${!sameReceiver ? "receiver" : ""}${label}`}
        id={`${!sameReceiver ? "receiver" : ""}${label}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && required && !value && <FieldRequiredWarning />}
    </div>
  );
}

export default NameInputField;
