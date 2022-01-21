import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import {FaPlus} from 'react-icons/fa'

import { OrdersContext } from '../../context/OrdersContext';
import { ProductCard } from './ProductCard';

export const OrderDetailScreen = () => {

    const [orderState, setOrderState] = useState(false);

    const {orderId} =  useParams();
    const {ordersState: {orders}} = useContext(OrdersContext);
    const currentOrder = orders.find(x => x.id === orderId);
    const navigate = useNavigate()

    return (
        <div className="order-details-screen">
            {
                orderState &&
                <div className='alert-order h-100'>
                    <div className="alert alert-success alert-dismissible fade show w-50 h-25" id='order-success-alert' role="alert">
                        Pago completado exitosamente
                        <Link to='/'  className="btn btn-primary close-alert">Aceptar</Link>
                    </div>
                </div>
            }
            <table className='products-list-container'>
                {currentOrder?.items.map(productItem => (<ProductCard product={productItem}></ProductCard>))}
                <Link to={`/add-product/${orderId}`} className="card-product add-new-product" >
                    <div>
                        <FaPlus/>
                    </div>
                    <h3>Agregar nuevo producto</h3>
                </Link>
            </table>
            <div className='order-details-space'>
                <div className="order-details-container">
                    <button type="button" className="btn btn-success my-4"  onClick={()=>setOrderState(true)}>Pagar</button>
                    <div className='separator'/>

                    <div>
                        <h3>Detalles de la orden</h3>
                        <div className='d-flex justify-content-between'>
                                <span>Orden ID: {currentOrder?.id}</span>
                                <span>|</span>
                                <span>Nro de orden: #{currentOrder?.number}</span>
                        </div>

                    </div>
                    <div className='separator'/>

                    <div>
                        <h3>Datos de envío</h3>
                            <div>Nombre: {`${currentOrder?.billingAddress.firstName} ${currentOrder?.billingAddress.lastName}`}</div>
                            <span>{currentOrder?.billingAddress.address1} </span>
                            <span>{currentOrder?.billingAddress.address2} </span>
                            <span>{currentOrder?.billingAddress.address3} </span>
                            <span>{currentOrder?.billingAddress.city} </span>
                            <span>{currentOrder?.billingAddress.postalCode}</span>
                            <div>{currentOrder?.billingAddress.country.name}</div>
                            <div>Teléfono: {currentOrder?.billingAddress.phone}</div>
                            
                    </div>
                    <div className='separator'/>

                    <div className='prices-container'>
                        <h3>Resumen</h3>
                        <div className='price-rows-container'>
                            <span>Productos ({currentOrder?.items.length})</span>
                            <span>${Number(currentOrder?.totals.subtotal??  0) + Number(currentOrder?.totals.discount?? 0)}</span>
                        </div>
                        <div className='price-rows-container'>
                            <span>Envio </span>
                            {(Number(currentOrder?.totals.shipping??0) > 0) 
                            ? <span>$(Number(currentOrder?.totals.shipping??0)</span>
                            : <span className='text-success'>Gratis</span>
                            }
                        </div>
                        <div className='price-rows-container'>
                            <span>Tax</span>
                            <span>${currentOrder?.totals.tax}</span>
                        </div>
                        {
                        (Number(currentOrder?.totals.discount?? 0) > 0)
                        &&
                        <div className='price-rows-container'>
                            <span className='text-success'>Descuento</span>
                            <span className='text-success'>-${currentOrder?.totals.tax}</span>
                        </div>
                        }
                        <div className='total-container'>
                            <h4>Total</h4>
                            <h4>${currentOrder?.totals.total} MXN</h4>
                        </div>
                    </div>
                    <div className='separator'/>

                    <button type="button" className="btn btn-success my-4" onClick={()=>setOrderState(true)}>Pagar</button>

                </div>
            </div>
        </div>
    );
};
