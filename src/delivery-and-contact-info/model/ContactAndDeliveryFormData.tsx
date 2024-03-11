export interface FormDataField {
  value: string;
  valid: boolean;
}
export interface ContactAndDeliveryFormData {
  country: FormDataField;
  firstName: FormDataField;
  surname: FormDataField;
  email: FormDataField;
  streetNameAndNumber: FormDataField;
  zipCode: FormDataField;
  city: FormDataField;
  phone: FormDataField;
  company: FormDataField;
  cvr: FormDataField;

  recCountry: FormDataField;
  recFirstName: FormDataField;
  recSurname: FormDataField;
  recStreetNameAndNumber: FormDataField;
  recZipCode: FormDataField;
  recCity: FormDataField;
  recPhone: FormDataField;
}
