import { ContactAndDeliveryFormData } from "./model/ContactAndDeliveryFormData";

export async function handleZipCodeValidation(
  zipCode: string,
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void,
  formData: ContactAndDeliveryFormData,
  cityFieldKey: keyof ContactAndDeliveryFormData
): Promise<void> {
  try {
    const response = await fetch(
      `https://api.dataforsyningen.dk/postnumre/${zipCode}`
    );
    if (!response.ok) {
      throw new Error("Invalid zipcode");
    }
    const data = await response.json();
    setContactAndDeliveryFormData({
      ...formData,
      [cityFieldKey]: { ...formData[cityFieldKey], value: data.navn },
    });
  } catch (error) {
    // Handle the error
  }
}
