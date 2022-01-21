import { createContext } from "react";
import { Item, Orders } from '../interfaces/Orders';

export type OrdersContextProps = {
    ordersState: Orders;
    addNewProduct: (orderID: String, product: Item) => void,
    setOrders: (orders: Orders) => void

} 

export const OrdersContext = createContext({} as OrdersContextProps);