import { Item } from "./model/Item.tsx";

export function getTotalPriceForProduct(
  basket: Item[],
  productID: string
): { totalPrice: number, rebate: number } {
  const product = basket.find((item) => item.id === productID);
  const giftWrapPrice = product?.giftWrap ? 10 : 0;
  let rebate = 0;

  // Tjek om mængden er 5 eller mere og beregn rabatten.
  if (product && product.amount >= 5) {
    rebate = product.price * product.amount * 0.10; // 10% rabat
  }

  const totalPrice = product ? (product.price * product.amount + giftWrapPrice) - rebate : 0;

  return { totalPrice, rebate };
}
