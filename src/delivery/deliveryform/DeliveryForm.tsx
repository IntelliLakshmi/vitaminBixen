import { handleZipCodeValidation } from "../handleZipCodeValidation";
import NameInputField from "../inputfields/NameInputField";
import ZipCodeInputField from "../inputfields/ZipCodeInputField";
import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";

interface DeliveryFormProps {
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function DeliveryForm({
  formData,
  setContactAndDeliveryFormData,
}: DeliveryFormProps) {
  const handleValidatedZipCode = (zipCode: string) => {
    handleZipCodeValidation(
      zipCode,
      setContactAndDeliveryFormData,
      formData,
      "city"
    );
  };

  return (
    <div>
      <NameInputField
        formData={formData}
        formDataField="streetNameAndNumber"
        label="Vejnavn og husnummer"
        value={formData.streetNameAndNumber.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast vejnavn og husnummer"
      />
      <div className="row">
        <div className="row-element-1">
          <ZipCodeInputField
            formData={formData}
            formDataField="zipCode"
            label="Postnummer"
            value={formData.zipCode.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast postnummer"
            onZipCodeValidated={handleValidatedZipCode}
          />
        </div>
        <div className="row-element-2">
          <NameInputField
            formData={formData}
            formDataField="city"
            label="By"
            value={formData.city.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast by"
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
