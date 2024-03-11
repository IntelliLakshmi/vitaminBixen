import { Item } from "./model/Item.tsx";

export function getTotalPriceForProduct(
  basket: Item[],
  productID: string
): { totalPrice: number, rebate: number } {
  const product = basket.find((item) => item.id === productID);
  const giftWrapPrice = product?.giftWrap ? 10 : 0;
  let rebate = 0;

  // Tjek om mængden er større en rebateQuantity og beregn rabatten.
  if (product && product.amount >= product.rebateQuantity) {
    rebate = product.price * product.amount * product.rebatePercent; 
  }

  const totalPrice = product ? (product.price * product.amount + giftWrapPrice) - rebate : 0;

  return { totalPrice, rebate };
}
