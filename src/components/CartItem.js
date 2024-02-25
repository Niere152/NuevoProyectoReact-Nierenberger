import { useContext } from 'react';
import { CartContext } from './Context/CartContext';

export const CartItem = () => {
    const ctx = useContext(CartContext)
    return {
        ...ctx
    }
}

export default CartItem;