import { Item, Orders } from '../interfaces/Orders';

type orderAction = 
    | {type: 'addNewProduct', payload: {orderID:String, product: Item}}
    | {type: 'setOrders', payload: {orders: Orders}}

export const orderReducer = (state : Orders, action: orderAction) : Orders => {

    switch (action.type) {
        case 'setOrders': 

            return action.payload.orders

        case 'addNewProduct':
            const selectedOrder = state.orders.findIndex(x => x.id === action.payload.orderID)
            return{
                ...state,
                orders: [
                    ...state.orders.slice(0, selectedOrder),
                    {
                        ...state.orders[selectedOrder],
                        items: state.orders[selectedOrder].items.concat(action.payload.product)
                    },
                    ...state.orders.slice(selectedOrder + 1)
                ]
            }
        
        default:
            return{
                ...state
            }
    }

}