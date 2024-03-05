import { useState } from 'react';
import '../css/cartitems.css'
import data from '../data/product.json'
import CheckoutTotal from '../checkout-total/CheckoutTotal';
import GiftWrap from './giftwrap/GiftWrap';


// Declaring the data types the const is taking in
interface ItemProps {
    id: string;
    name: string;
    price: number;
    currency: string
    img: string;
    amount: number;
    giftWrap: boolean;
    upsellProductId: string;
}

const initialBasket: ItemProps[] = 
    data.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency,
        img: item.img,
        amount: 1,
        giftWrap: false,
        upsellProductId: item.upsellProductId || ''}));

 
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
            } else if (item.id === productID && item.amount === 1) {
                return null; // Remove the item from the list
            } else {
                return item;
            }}).filter(Boolean) as ItemProps[]) // Filter out null values and cast to ItemProps[]
    }
    
    function getTotalPriceForProduct(productID: string): number {
        const product = basket.find(item => item.id === productID);
        const giftWrapPrice = product?.giftWrap ? 10 : 0;
        return product ? product.price * product.amount + giftWrapPrice : 0;
    }

    function getTotalPriceForBasket() : number{
        let total : number = 0;
        basket.forEach(item => {
            total += getTotalPriceForProduct(item.id)
        })
        return total;
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

    return (
        <>
            {/* HTML for the top part of Items */}
            <hr className={"marginLeftRight30px"}/>
            <div className='topRow itemBoxSize marginLeftRight30px spaceBetween topText'>
                <p className={"textSizeXLarge marginLeft45px"}>Varer i indkøbskurven</p>
                <ul className='columnNames spaceBetween'>
                    <li>Antal</li>
                    <li>Pris</li>
                    <li>Rabat</li>
                    <li>Total</li>
                </ul>
            </div>
            <br/>
            <hr className={"marginLeftRight30px"}/>
            <div>
                {basket.length === 0 ? (
                    <p className={"textSizeXLarge marginLeft45px  marginTopBottom25px"}>Din indkøbskurv er tom</p>
                ) : (
                    basket.map(product => displayItem(product))
                )}
            </div>
            <CheckoutTotal total={getTotalPriceForBasket()}/>
        </>
    )

    function UpsellItem(product: ItemProps) {
        const upsellProduct = getItemPropFromId(product.upsellProductId);

        if (!upsellProduct) {
            return null;
        }
        return (
            <>  
                <div className='upsellTopContainer'>
                    <img src={upsellProduct.img} alt="Image of product" className="upsellImage"/>
                    <div className="upsellContainer">
                        <p className={"upsellName textSizeLarge"}>{upsellProduct.name}</p>
                        <p className={"upsellText clickable"} onClick={() => changeItemInBasket(product.id, upsellProduct)}>Opgrader dit produkt</p>
                    </div>
                </div>
                
            </>
        )
    }

    function getItemPropFromId(itemId: string): ItemProps | undefined {
        const item = basket.find(item => item.id === itemId);
        if (item) {
            return item;
        } else {
            const newItem = data.find(item => item.id === itemId);
            if (newItem) {
                return {
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    currency: newItem.currency,
                    img: newItem.img,
                    amount: 1,
                    giftWrap: false,
                    upsellProductId: newItem.upsellProductId || ''
                };
            } else {
                return undefined;
            }
        }
    }
    
    function changeItemInBasket(itemId: string, newItem: ItemProps) {
        const existingItemIndex = basket.findIndex(item => item.id === newItem.id);
        const originalItem = basket.find(item => item.id === itemId);
        if (existingItemIndex !== -1 && originalItem) {
            // If the upsell item already exists in the basket, create a new array with the updated item
            const newBasket = [...basket];
            newBasket[existingItemIndex] = {
                ...newBasket[existingItemIndex],
                amount: newBasket[existingItemIndex].amount + originalItem.amount
            };
            setBasket(newBasket.filter(item => item.id !== itemId));
        } else if (originalItem) {
            // If the upsell item does not exist in the basket, replace the original item with the upsell item
            setBasket(basket.map(item => {
                if (item.id === itemId) {
                    return {...newItem, amount: originalItem.amount};
                } else {
                    return item;
                }
            }));
        }
    }

    // Creates a product item
    function displayItem(product: ItemProps) {
        return (
            <>
                <div className={"marginLeftRight30px marginTopBottom25px itemBoxSize flexRow spaceBetween itemRow"}>
                    <div>
                        <img src={product.img} alt="Image of product" className="cartImage"/>
                        <div className="flexColumn itemNames">
                            <div>
                                <p className={"textSizeXLarge titelText"}>{product.name}</p>
                                <p className={"textSizeSmall"}>Varenummer: {product.id}</p>
                            </div>
                            <GiftWrap onChange={() => setGiftWrapOnChange(product.id)}/>
                            <div className="flexRow deliveryText textMoveDown65px">
                                <i className="material-icons">check_circle</i>
                                <p className={"textSizeSmall marginLeft10px icon-text"}>På lager - Levering i morgen (bestil inden 22:00)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <UpsellItem {...product}/>
                    </div>                   
                    <div className={"pricesContainer"}>
                        <ul  className="prices spaceBetween">
                            <li>
                                <div className="itemCounter flexRow">
                                    <p className="textSizeLarge clickable" onClick={() => minusAmount(product.id)}>-</p>
                                    <p className="textSizeMedium">{product.amount}</p>
                                    <p className="textSizeLarge clickable" onClick={() => plusAmount(product.id)}>+</p>
                                </div>
                            </li>
                            <li>{product.price} {product.currency}</li>
                            <li>0 {product.currency}</li>
                            <li>{getTotalPriceForProduct(product.id)}{product.currency}</li>
                        </ul>
                    </div>
                </div>
                <hr className={"marginLeftRight30px"}/>
            </>
        )
    }
}

