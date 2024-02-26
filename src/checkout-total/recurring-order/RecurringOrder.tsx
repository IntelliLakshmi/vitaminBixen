import './recurring-order.css';

function RecurringOrder() {
    return (
        <div className="container">
            <p>Abonner på ordre</p>
            <label className="">
            <input type="checkbox"></input>
            <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default RecurringOrder