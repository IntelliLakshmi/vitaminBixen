import { ContactAndDeliveryFormData } from "../delivery-and-contact-info/model/ContactAndDeliveryFormData";

export function SetAllReceiverFieldsToInvalid(
  formData: ContactAndDeliveryFormData,
  setContactAndDeliveryFormData: (
    newFormData: ContactAndDeliveryFormData
  ) => void
) {
  const updatedFormData = {
    ...formData,
    recFirstName: { value: "", valid: false },
    recSurname: { value: "", valid: false },
    recStreetNameAndNumber: {
      value: "",
      valid: false,
    },
    recZipCode: { value: "", valid: false },
    recCity: { value: "", valid: false },
    recPhone: { value: "", valid: false },
  };

  setContactAndDeliveryFormData(updatedFormData);
}
