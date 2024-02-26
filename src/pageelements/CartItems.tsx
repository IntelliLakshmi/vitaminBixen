import { useState } from 'react';
import '../css/cartitems.css'
import data from '../data/product.json'
import GiftWrap from './GiftWrap';

// Declaring the data types the const is taking in
interface ItemProps {
    id: string;
    name: string;
    price: number;
    currency: string
    img: string;
    amount: number;
    giftWrap: boolean;
}

const initialBasket: ItemProps[] = 
    data.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency,
        img: item.img,
        amount: 1,
        giftWrap: false}));

 
 export default function cartItems(){
    const [basket, setBasket] = useState(initialBasket);

    function plusAmount(productID: string) {
        setBasket(basket.map(item => {
            if (item.id === productID) {
                return { ...item, amount: item.amount + 1 };
            } else {
                return item;
            }}))
    }
    function minusAmount(productID: string) {
        setBasket(basket.map(item => {
            if (item.id === productID && item.amount > 1) {
                return { ...item, amount: item.amount - 1 };
            } else {
                return item;
            }}))
    }
    
    function setGiftWrapOnChange(productID: string) {
        setBasket(basket.map(item => {
            if (item.id === productID) {
                return { ...item, giftWrap: !item.giftWrap };
            } else {
                return item;
            }
        }));
    }

    function getTotalPrice(productID: string): number {
        const product = basket.find(item => item.id === productID);
        return product ? product.price * product.amount : 0;
    }

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
                {basket.map(product => displayItem(product))}
            </div>
        </>
    )

    // Creates a product item
    function displayItem(product: ItemProps) {
        return (
            <>
                <div className={"marginLeftRight30px marginTopBottom25px itemBoxSize flexRow"}>
                    <img src={product.img} alt="Image of product" className="cartImage"/>
                    <div className="flexColumn">
                        <p className={"textSizeXLarge titelText"}>{product.name}</p>
                        <p className={"textSizeSmall"}>Varenummer: {product.id}</p>
                        <GiftWrap onChange={() => setGiftWrapOnChange(product.id)}/>
                        <div className="flexRow deliveryText textMoveDown65px">
                            <i className="material-icons">check_circle</i>
                            <p className={"textSizeSmall marginLeft10px icon-text"}>På lager - Levering i morgen (bestil inden 22:00)</p>
                        </div>
                        
                    </div>
                    <ul>
                        <li>{product.price} {product.currency}</li>
                        <li>{product.price} {product.currency}</li>
                        <li>{getTotalPrice(product.id)}{product.currency}</li>
                        <li><div className="itemCounter flexRow">
                            <p className="textSizeLarge clickable" onClick={() => minusAmount(product.id)}>-</p>
                            <p className="textSizeMedium">{product.amount}</p>
                            <p className="textSizeLarge clickable" onClick={() => plusAmount(product.id)}>+</p></div>
                        </li>
                    </ul>
                </div>
                <hr className={"marginLeftRight30px"}/>
            </>
        )
    }
}

