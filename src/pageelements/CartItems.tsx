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
            <p>Hello, {product.currency}</p>
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