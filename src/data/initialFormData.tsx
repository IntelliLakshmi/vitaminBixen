import { ContactAndDeliveryFormData } from "../delivery-and-contact-info/model/ContactAndDeliveryFormData";

export const initialFormData: ContactAndDeliveryFormData = {
  country: { value: "denmark", valid: true },
  firstName: { value: "", valid: false },
  surname: { value: "", valid: false },
  email: { value: "", valid: false },
  streetNameAndNumber: { value: "", valid: false },
  zipCode: { value: "", valid: false },
  city: { value: "", valid: false },
  phone: { value: "", valid: false },
  company: { value: "", valid: true },
  cvr: { value: "", valid: true },

  recCountry: { value: "denmark", valid: true },
  recFirstName: { value: "", valid: true },
  recSurname: { value: "", valid: true },
  recStreetNameAndNumber: { value: "", valid: true },
  recZipCode: { value: "", valid: true },
  recCity: { value: "", valid: true },
  recPhone: { value: "", valid: true },
};
