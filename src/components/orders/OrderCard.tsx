import { Order } from '../../interfaces/Orders';
import { Link } from 'react-router-dom';

interface OrderCardProps {
    order : Order,
}

export const OrderCard = ({order} : OrderCardProps) => {

    return (
        <div className="card my-4 col-5">
            <h5 className="card-header bg-dark text-light">Orden ID: {order.id}</h5>
            <div className="card-body">
                <p className="card-text">Nombre de la Orden: {order.name}</p>
                <Link to={`/order/${order.id}`}  className="btn btn-primary">Ver detalles de la orden</Link>
            </div>
        </div>
    );
  };