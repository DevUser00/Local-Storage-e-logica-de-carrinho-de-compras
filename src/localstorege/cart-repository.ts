import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
   const str =  JSON.stringify(cart);
   localStorage.setItem("Key",str);
}

export function get() : OrderDTO  {
   const str = localStorage.getItem("Key") || '{"items"=[]}';
   return JSON.parse(str);
}