import React, { useContext, useEffect, useState } from 'react';
import { Orders, orderDefault, ItemName } from '../../interfaces/Orders';
import { apiDB, authenticationToken } from '../../api/apiDB';
import { OrderCard } from './OrderCard';
import { OrdersContext } from '../../context/OrdersContext';

export const OrdersScreen = () => {

    const apiURL = 'https://eshop-deve.herokuapp.com/api/v2/orders';

    const {ordersState, setOrders} = useContext(OrdersContext);

    useEffect(() => {
      
        apiDB.get('/v2/orders', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': authenticationToken
            }
        })
        .then((data) => {
            setOrders(data.data)
        })
        .catch((err) => {
            console.log('Ha habido un problema al llamar a la API')
        })
    
      return () => {
        
      };
    }, []);
    


  return (
    <div className='container'>
        <h3>Lista de ordenes</h3>
        <ul className='order-list'>
            {
               ordersState.orders.map( orderItem => (
                   <OrderCard order={orderItem} key={`order${orderItem.id}`}/>
                ))
            }
        </ul>
    </div>
  )
  ;
};



