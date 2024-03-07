import { SetAllReceiverFieldsToInvalid } from "../utils/SetAllReceiverFieldsToInvalid";
import { SetAllReceiverFieldsToValid } from "../utils/SetAllReceiverFieldsToValid";
import { ContactAndDeliveryFormData } from "./model/ContactAndDeliveryFormData";

interface SameDeliveryAddressButtonProps {
  differentReceiver: boolean;
  setDifferentReceiver: (differentReceiver: boolean) => void;
  formData: ContactAndDeliveryFormData;
  setContactAndDeliveryFormData: (formData: ContactAndDeliveryFormData) => void;
}

function SameDeliveryAddressButton({
  differentReceiver,
  setDifferentReceiver,
  formData,
  setContactAndDeliveryFormData,
}: SameDeliveryAddressButtonProps) {
  function handleChange() {
    setDifferentReceiver(!differentReceiver);
    if (!differentReceiver) {
      SetAllReceiverFieldsToValid(formData, setContactAndDeliveryFormData);
    } else {
      SetAllReceiverFieldsToInvalid(formData, setContactAndDeliveryFormData);
    }
  }

  return (
    <>
      <input
        type="checkbox"
        checked={differentReceiver}
        onChange={handleChange}
      />
      <label>Send til faktureringsadresse</label>
    </>
  );
}

export default SameDeliveryAddressButton;
