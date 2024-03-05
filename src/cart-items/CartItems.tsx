import { getTotalPriceForProduct } from "./getTotalPriceForProduct.tsx";
import "./cartitems.css";
import GiftWrap from "./giftwrap/GiftWrap.tsx";
import { Item } from "./model/Item.tsx";

// Declaring the data types the const is taking in
interface CartItemsProps {
  basket: Item[];
  setBasket: (basket: Item[]) => void;
}

export default function CartItems({ basket, setBasket }: CartItemsProps) {
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
    ); // Filter out null values and cast to ItemProps[]
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

  return (
    <>
      {/* HTML for the top part of Items */}
      <hr />
      <div className="topRow itemBoxSize marginLeftRight30px spaceBetween topText">
        <p className={"textSizeXLarge marginLeft45px"}>Varer i indkøbskurven</p>
        <ul className="columnNames spaceBetween">
          <li>Antal</li>
          <li>Pris</li>
          <li>Rabat</li>
          <li>Total</li>
        </ul>
      </div>
      <br />
      <hr className={"marginLeftRight30px"} />
      <div>{basket.map((product) => displayItem(product))}</div>
    </>
  );

  // Creates a product item
  function displayItem(product: Item) {
    return (
      <>
        <div
          className={
            "marginLeftRight30px marginTopBottom25px itemBoxSize flexRow spaceBetween itemRow"
          }
        >
          <div>
            <img
              src={product.img}
              alt="Image of product"
              className="cartImage"
            />
            <div className="flexColumn itemNames">
              <div>
                <p className={"textSizeXLarge titelText"}>{product.name}</p>
                <p className={"textSizeSmall"}>Varenummer: {product.id}</p>
              </div>
              <GiftWrap onChange={() => setGiftWrapOnChange(product.id)} />
              <div className="flexRow deliveryText textMoveDown65px">
                <i className="material-icons">check_circle</i>
                <p className={"textSizeSmall marginLeft10px icon-text"}>
                  På lager - Levering i morgen (bestil inden 22:00)
                </p>
              </div>
            </div>
          </div>
          <div className={"pricesContainer"}>
            <ul className="prices spaceBetween">
              <li>
                <div className="itemCounter flexRow">
                  <p
                    className="textSizeLarge clickable"
                    onClick={() => minusAmount(product.id)}
                  >
                    -
                  </p>
                  <p className="textSizeMedium">{product.amount}</p>
                  <p
                    className="textSizeLarge clickable"
                    onClick={() => plusAmount(product.id)}
                  >
                    +
                  </p>
                </div>
              </li>
              <li>
                {product.price} {product.currency}
              </li>
              <li>0 {product.currency}</li>
              <li>
                {getTotalPriceForProduct(basket, product.id)}
                {product.currency}
              </li>
            </ul>
          </div>
        </div>
        <hr className={"marginLeftRight30px"} />
      </>
    );
  }
}
