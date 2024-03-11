import { ContactAndDeliveryFormData } from "../model/ContactAndDeliveryFormData";
import NameInputField from "../inputfields/NameInputField";
import NumericInputField from "../inputfields/NumericInputField";

interface CompanyFormProps {
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function CompanyForm({
  formData,
  setContactAndDeliveryFormData,
}: CompanyFormProps) {
  return (
    <div>
      <NameInputField
        required={false}
        formData={formData}
        formDataField="company"
        label="Virksomhedsnavn"
        value={formData.company.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        placeholder="Indtast virksomhedsnavn (valgfrit)"
      />
      <NumericInputField
        required={false}
        formData={formData}
        formDataField="cvr"
        label="CVR-nummer"
        value={formData.cvr.value}
        setContactAndDeliveryFormData={setContactAndDeliveryFormData}
        minLength={8}
        maxLength={8}
        placeholder="Indtast CVR-nummer (valgfrit)"
      />
    </div>
  );
}

export default CompanyForm;
