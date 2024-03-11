import "./checkout-button.css";

interface CheckoutButtonProps {
  onClick: () => void;
}

function CheckoutButton({ onClick }: CheckoutButtonProps) {
  return <button onClick={onClick}>Gå til levering</button>;
}

export default CheckoutButton;
