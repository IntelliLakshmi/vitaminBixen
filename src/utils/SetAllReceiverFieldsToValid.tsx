import { ContactAndDeliveryFormData } from "../delivery-and-contact-info/model/ContactAndDeliveryFormData";

export function SetAllReceiverFieldsToValid(
  formData: ContactAndDeliveryFormData,
  setContactAndDeliveryFormData: (
    newFormData: ContactAndDeliveryFormData
  ) => void
) {
  const updatedFormData = {
    ...formData,
    recFirstName: { ...formData.recFirstName, valid: true },
    recSurname: { ...formData.recSurname, valid: true },
    recStreetNameAndNumber: { ...formData.recStreetNameAndNumber, valid: true },
    recZipCode: { ...formData.recZipCode, valid: true },
    recCity: { ...formData.recCity, valid: true },
    recPhone: { ...formData.recPhone, valid: true },
  };

  setContactAndDeliveryFormData(updatedFormData);
}
