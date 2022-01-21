import React, { useReducer } from 'react';
import { OrdersContext } from './OrdersContext';
import { Orders, orderDefault, Item } from '../interfaces/Orders';
import { orderReducer } from './orderReducer';


interface ordersProviderProps{
  children: JSX.Element | JSX.Element[]
}

export const OrdersProvider = ({children} : ordersProviderProps) => {

  const [ordersState, dispatch] = useReducer(orderReducer, orderDefault)

  const addNewProduct = (orderID : String ,product : Item) => {
    dispatch({type:'addNewProduct', payload: {orderID, product}})
  }

  const setOrders = (orders: Orders) => {
    dispatch({type:'setOrders', payload: {orders}})
  }

  return (
    <div>
      <OrdersContext.Provider value={{ordersState, addNewProduct, setOrders}}>
        {children}
      </OrdersContext.Provider>
    </div>
  );
};
