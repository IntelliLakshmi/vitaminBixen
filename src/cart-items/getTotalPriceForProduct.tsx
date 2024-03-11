import { Item } from "./model/Item.tsx";

export function getTotalPriceForProduct(
  basket: Item[],
  productID: string
): number {
  const product = basket.find((item) => item.id === productID);
  const giftWrapPrice = product?.giftWrap ? 10 : 0;
  return product ? product.price * product.amount + giftWrapPrice : 0;
}
