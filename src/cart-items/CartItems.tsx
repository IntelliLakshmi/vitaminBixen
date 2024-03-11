import { getTotalPriceForProduct } from "./getTotalPriceForProduct.tsx";
import "./cartitems.css";
import GiftWrap from "./giftwrap/GiftWrap.tsx";
import { Item } from "./model/Item.tsx";
import data from "../data/product.json";

interface CartItemsProps {
    basket: Item[];
    setBasket: (basket: Item[]) => void;
}

function CartItems({ basket, setBasket }: CartItemsProps) {
    function plusAmount(productID: string) {
        setBasket(
            basket.map((item) => {
                if (item.id === productID) {
                    return { ...item, amount: item.amount + 1 };
                } else {
                    return item;
                }
            })
        );
    }

    function minusAmount(productID: string) {
        setBasket(
            basket
                .map((item) => {
                    if (item.id === productID && item.amount > 1) {
                        return { ...item, amount: item.amount - 1 };
                    } else if (item.id === productID && item.amount === 1) {
                        return null; // Remove the item from the list
                    } else {
                        return item;
                    }
                })
                .filter(Boolean) as Item[]
        );
    }

    function setGiftWrapOnChange(productID: string) {
        setBasket(
            basket.map((item) => {
                if (item.id === productID) {
                    return { ...item, giftWrap: !item.giftWrap };
                } else {
                    return item;
                }
            })
        );
    }

    /* !!! NOT FINISHED !!!
    function removeItem(productID: string) {
      setBasket(
        basket
          .map((item) => {
            if (item.id === productID) {
              return null;
            }
          })
      );
    }
    */
    function UpsellItem(product: Item) {
        const upsellProduct = getItemPropFromId(product.upsellProductId);

        if (!upsellProduct) {
            return null;
        }
        return (
            <>
                <div className='upsellTopContainer'>
                    <img src={upsellProduct.img} alt="Image of product" className="upsellImage" />
                    <div className="upsellContainer">
                        <p className={"upsellName textSizeLarge"}>{upsellProduct.name}</p>
                        <p className={"upsellText clickable"} onClick={() => changeItemInBasket(product.id, upsellProduct)}>Opgrader dit produkt</p>
                    </div>
                </div>

            </>
        )
    }

    function getItemPropFromId(itemId: string): Item | undefined {
        const itemProp = basket.find(itemProp => itemProp.id === itemId);
        if (itemProp) {
            return itemProp;
        } else {
            const newItem = data.find(itemProp => itemProp.id === itemId);
            if (newItem) {
                return {
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    currency: newItem.currency,
                    img: newItem.img,
                    amount: 1,
                    giftWrap: false,
                    rebatePercent: newItem.rebatePercent,
                    rebateQuantity: newItem.rebateQuantity,
                    upsellProductId: newItem.upsellProductId || ''
                };
            } else {
                return undefined;
            }
        }
    }

    function changeItemInBasket(itemId: string, newItem: Item) {
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
                    return { ...newItem, amount: originalItem.amount };
                } else {
                    return item;
                }
            }));
        }
    }

    return (
        <>
            <hr className="marginLeftRight30px" />
            <div className="topRow itemBoxSize marginLeftRight30px spaceBetween topText">
                <p className="textSizeXLarge marginLeft45px">Varer i indkøbskurven</p>
                <ul className="columnNames spaceBetween">
                    <li>Antal</li>
                    <li>Pris</li>
                    <li>Rabat</li>
                    <li>Total</li>
                </ul>
            </div>
            <br />
            <hr className="marginLeftRight30px" />
            <div>
                {basket.map((product) => {
                    const { totalPrice, rebate } = getTotalPriceForProduct(basket, product.id);

                    return (
                        <>
                            <div className="marginLeftRight30px marginTopBottom25px itemBoxSize flexRow spaceBetween itemRow">
                                <div>
                                    <img src={product.img} alt="Image of product" className="cartImage" />
                                    <div className="flexColumn itemNames">
                                        <div>
                                            <p className="textSizeXLarge titelText">{product.name}</p>
                                            <p className="textSizeSmall">Varenummer: {product.id}</p>
                                        </div>
                                        <GiftWrap onChange={() => setGiftWrapOnChange(product.id)} />
                                        <div className="flexRow deliveryText">
                                            <i className="material-icons">check_circle</i>
                                            <p className="textSizeSmall marginLeft10px icon-text">
                                                På lager - Levering i morgen (bestil inden 22:00)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <UpsellItem {...product} />
                                </div>
                                <div className="pricesContainer">
                                    <ul className="prices spaceBetween">
                                        <li>
                                            <div className="itemCounter flexRow">
                                                <p className="textSizeLarge clickable" onClick={() => minusAmount(product.id)}>-</p>
                                                <p className="textSizeMedium">{product.amount}</p>
                                                <p className="textSizeLarge clickable" onClick={() => plusAmount(product.id)}>+</p>
                                            </div>
                                        </li>
                                        <li>
                                            {product.price} {product.currency}
                                        </li>
                                        <li>
                                            {rebate > 0 ? `${rebate.toFixed(2)} ${product.currency} Rabat` : `0 ${product.currency}`}
                                        </li>
                                        <li>
                                            {totalPrice.toFixed(2)} {product.currency}
                                        </li>
                                    </ul>
                                    <ul className="prices spaceBetween">
                                        <li>
                                            <div className='messageRebate'>
                                                {product.amount < product.rebateQuantity && (
                                                    <div className="withoutRebate notification">
                                                        <span>
                                                            Få <strong>{product.rebatePercent * 100}%</strong> rabat
                                                        </span>
                                                        Køb <strong>{product.rebateQuantity - product.amount}</strong> mere og få <strong>{product.rebatePercent * 100}% i rabat!</strong>
                                                    </div>
                                                )}
                                                {product.amount >= product.rebateQuantity && (
                                                    <div className="withRebate notification">
                                                        <span>
                                                            Tillykke!
                                                        </span>
                                                        Du har fået <strong>{product.rebatePercent * 100}%</strong> på dit køb!
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li>
                                            <i className="material-icons" /* onClick !!! NOT FINISHED !!!*/ >delete</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="marginLeftRight30px" />
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default CartItems;
