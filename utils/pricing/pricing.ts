import { CartItem } from "@/types/grocery";


export const calculateTotal = (cart: CartItem[]) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};