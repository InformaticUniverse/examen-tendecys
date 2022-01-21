import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderDetailScreen } from '../components/orders/OrderDetailScreen';
import { OrdersScreen } from '../components/orders/OrdersScreen';
import { OrdersProvider } from '../context/OrdersProvider';
import { AddProductScreen } from '../components/Products/AddProductScreen';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (
      <OrdersProvider>
          <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<OrdersScreen/>}/>
                    <Route path='/order/:orderId' element={<OrderDetailScreen/>} />
                    <Route path='/add-product/:orderId' element={<AddProductScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
      </OrdersProvider>
    
  );
};
