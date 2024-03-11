import { Item } from "../cart-items/model/Item";
import data from "./product.json";

export const initialBasket: Item[] = data.map((item) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  currency: item.currency,
  img: item.img,
  amount: 1,
  giftWrap: false,
}));
