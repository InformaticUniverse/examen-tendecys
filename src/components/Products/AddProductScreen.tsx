import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Item } from '../../interfaces/Orders';
import {useRef} from 'react';
import {useState} from 'react';
import { OrdersContext } from '../../context/OrdersContext';

const productInitial = {
    product : {
        sku:          '',
        name:         '',
        quantity:     '',
        price:        '',
    },
    skuClass: '',
    nameClass: '',
    quantityClass: '',
    priceClass: '',
    
}

export const AddProductScreen = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState(productInitial);
    const context = useContext(OrdersContext);
    const {orderId} =  useParams();

    const handleInputChange = (stateName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            product: {
                ...form.product,
                [`${stateName}`]:e.target.value
            }
        });
    }

    const handleOnSubmit = () => {
        var skuClass = (form.product.sku === '') ? 'invalid' : ''
        var nameClass = (form.product.name === '') ? 'invalid' : ''
        var quantityClass = (form.product.quantity === '')  ? 'invalid' : ''
        var priceClass = (form.product.price === '')  ? 'invalid' : ''
        
        setForm({
            ...form,
            skuClass,
            nameClass,
            quantityClass,
            priceClass,
        })

        var isValid = true 
        Object.values<string>(form.product).forEach(value =>{
            if(value === '')isValid=false
        })
        if(isValid){
            navigate(`/order/${orderId}`);
        }

        context.addNewProduct(orderId?? '', form.product)
    }

  return (
    <div className='container'>
        <form className='add-product-container'>
            <h3>Agregar producto</h3>
            <div className="form-group">
                <label>Nombre del producto</label>
                <input type="text" className={`form-control ${form.nameClass}`} id="product-name" placeholder="nombre" required onChange={(e)=>{handleInputChange('name', e)}}/>
            </div>
            <div className="form-group">
                <label >SKU</label>
                <input type="text" className={`form-control ${form.skuClass}`} id="product-sku" placeholder="sku" required onChange={(e)=>{handleInputChange('sku', e)}}/>
            </div>
            <div className="form-group">
                <label >Precio</label>
                <input type="number" className={`form-control ${form.priceClass}`} id="product-price" placeholder="Precio" required onChange={(e)=>{handleInputChange('price', e)}}/>
            </div>
            <div className="form-group">
                <label >Cantidad</label>
                <input type="number" className={`form-control ${form.quantityClass}`} id="product-quantity" placeholder="Cantidad" required onChange={(e)=>{handleInputChange('quantity', e)}}/>
            </div>
            <div className='buttons-form mt-3 mb-5 px-2'>   
                <button type="submit" className="btn btn-danger" onClick={() =>navigate(-1)}>Cancelar</button>
                <button type="submit" className="btn btn-primary" onClick={handleOnSubmit}>Guardar</button>
            </div>
        </form>
    </div>
  );
};