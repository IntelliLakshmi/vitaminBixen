import { useCallback } from "react";
import { handleZipCodeValidation } from "./handleZipCodeValidation";
import NameInputField from "./inputfields/NameInputField";
import PhoneInputField from "./inputfields/PhoneInputField";
import ZipCodeInputField from "./inputfields/ZipCodeInputField";
import { ContactAndDeliveryFormData } from "./model/ContactAndDeliveryFormData";

interface AlternativeReceiverFormProps {
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function AlternativeReceiverForm({
  formData,
  setContactAndDeliveryFormData,
}: AlternativeReceiverFormProps) {
  const handleValidatedZipCode = useCallback(
    (zipCode: string) => {
      handleZipCodeValidation(
        zipCode,
        setContactAndDeliveryFormData,
        formData,
        "recCity"
      );
    },
    [formData, setContactAndDeliveryFormData]
  );

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
            sameReceiver={false}
            autofocus={true}
            formData={formData}
            formDataField="recFirstName"
            label="Fornavn"
            value={formData.recFirstName.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast fornavn"
          />
        </div>
        <div className="row-element-2">
          <NameInputField
            sameReceiver={false}
            formData={formData}
            formDataField="recSurname"
            label="Efternavn"
            value={formData.recSurname.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast efternavn"
          />
        </div>
      </div>
      <PhoneInputField
        sameReceiver={false}
        formData={formData}
        formDataField="recPhone"
        label="Telefonnummer"
        value={formData.recPhone.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast telefonnummer f.eks. 12345678"
        minLength={8}
        maxLength={8}
      />
      <NameInputField
        sameReceiver={false}
        formData={formData}
        formDataField="recStreetNameAndNumber"
        label="Vejnavn og husnummer"
        value={formData.recStreetNameAndNumber.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast vejnavn og husnummer"
      />
      <div className="row">
        <div className="row-element-1">
          <ZipCodeInputField
            sameReceiver={false}
            formData={formData}
            formDataField="recZipCode"
            label="Postnummer"
            value={formData.recZipCode.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast postnummer"
            onZipCodeValidated={handleValidatedZipCode}
          />
        </div>
        <div className="row-element-2">
          <NameInputField
            sameReceiver={false}
            formData={formData}
            formDataField="recCity"
            label="By"
            value={formData.recCity.value}
            setContactAndDeliveryFormData={setContactAndDeliveryFormData}
            placeholder="Indtast by"
          />
        </div>
      </div>
    </div>
  );
}

export default AlternativeReceiverForm;
