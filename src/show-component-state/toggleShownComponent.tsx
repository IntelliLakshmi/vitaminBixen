import { Dispatch, SetStateAction } from "react";
import { ContactAndDeliveryState } from "./ContactAndDeliveryState";

export function toggleContactAndDelivery(
  setStateFunction: Dispatch<SetStateAction<ContactAndDeliveryState>>
) {
  setStateFunction((prevState) => {
    switch (prevState) {
      case ContactAndDeliveryState.ContAndDelInfoVisible:
        return ContactAndDeliveryState.DeliveryVisible;
      case ContactAndDeliveryState.DeliveryVisible:
        return ContactAndDeliveryState.PaymentVisible;
      case ContactAndDeliveryState.PaymentVisible:
        //replace with receipt
        return ContactAndDeliveryState.ContAndDelInfoVisible;
      default:
        return prevState;
    }
  });
}
