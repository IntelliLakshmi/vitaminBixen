interface SameDeliveryAddressButtonProps {
  differentReceiver: boolean;
  setDifferentReceiver: (differentReceiver: boolean) => void;
}

function SameDeliveryAddressButton({
  differentReceiver,
  setDifferentReceiver,
}: SameDeliveryAddressButtonProps) {
  function handleChange() {
    setDifferentReceiver(!differentReceiver);
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
