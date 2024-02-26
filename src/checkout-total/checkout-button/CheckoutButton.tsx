import './checkout-button.css';

function CheckoutButton() {
    function handleClick() {
        alert('Checkout button is not implemented!');
    }

    return (
        <button onClick={handleClick}>
        Gå til kassen
        </button>
    );
}

export default CheckoutButton