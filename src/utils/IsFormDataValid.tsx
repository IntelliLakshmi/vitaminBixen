import { ContactAndDeliveryFormData } from "../delivery-and-contact-info/model/ContactAndDeliveryFormData";

export function isFormDataValid(formData: ContactAndDeliveryFormData): boolean {
  let allValid = true;
  for (const key in formData) {
    const data = formData[key as keyof ContactAndDeliveryFormData];
    if (!data.valid) {
      allValid = false;
      break;
    }
  }
  return allValid;
}
