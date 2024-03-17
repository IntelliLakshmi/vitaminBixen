import "./checkout-button.css";
import "../common.css";

interface CheckoutButtonProps {
  onClick: () => void;
}

function CheckoutButton({ onClick }: CheckoutButtonProps) {
  return (
    <button className="textSizeLarge bold clickable" onClick={onClick}>
      GÅ TIL LEVERING
    </button>
  );
}

export default CheckoutButton;
