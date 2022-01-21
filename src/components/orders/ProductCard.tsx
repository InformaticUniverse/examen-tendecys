import React from 'react';
import { Item} from '../../interfaces/Orders';

interface OrderCardProps {
    product : Item,
}

export const ProductCard = ({product} : OrderCardProps) => {
  return (
    <div className="card-product" >
        <div className='image-container'>
            <img className="img-fluid" src={product.imageUrl ?? undefined} alt="Imagen no disponible"/>
        </div>
        
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">SKU: {product.sku}.</li>
            <li className="list-group-item">Cantidad: {product.quantity} uds.</li>
            <li className="list-group-item">Precio : ${product.price}.</li>
        </ul>
        </div>
        
        
    </div>
  );
};
