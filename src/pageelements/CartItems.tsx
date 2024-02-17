import React from "react";
import '../css/cartitems.css'
import data from '../data/product.json'

// Declaring the data types the const is taking in
interface ItemProps {
    product: {
        id: string;
        name: string;
        price: number;
        currency: string
        img: string;
    }
}

// Creates a product item
const Item: React.FC<ItemProps> = ({ product }) => {
    return (
        <>
            <div className={"marginLeftRight30px itemBoxSize"}>
                <img src={product.img} alt="Image of product"/>
                <p className={"textSizeXLarge textMoveDown20px"}>{product.name}</p>
                <p className={"textSizeSmall"}>Varenummer: {product.id}</p>
                <p className={"textSizeSmall textMoveDown60px icon-text"}>
                    <i className="material-icons">check_circle</i> På lager - Levering i morgen (bestil inden 22:00)
                </p>
            </div>
            <hr className={"marginLeftRight30px"}/>
        </>
    )
}

// The function returned to App.tsx
function CartItems() {
    return (
        <>
            {/* HTML for the top part of Items */}
            <hr className={"marginLeftRight30px"}/>
            <p className={"textSizeXLarge marginLeft45px"}>Varer i indkøbskurven</p>
            <ul>
                <li>Total</li>
                <li>Rabat</li>
                <li>Pris</li>
                <li className={"marginRight160px"}>Antal</li>
            </ul>
            <br/>
            <hr className={"marginLeftRight30px"}/>
            <div>
                <Item product={data[0]}/>
            </div>
        </>
    )
}

export default CartItems