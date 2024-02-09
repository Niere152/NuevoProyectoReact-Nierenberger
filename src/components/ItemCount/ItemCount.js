import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity (quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Boton-Contador' onClick={decrement}>-</button>
                <h4 className='Numero'>{quantity}</h4>
                <button className='Boton-Contador' onClick={increment}>+</button>
            </div>
            <div>
                <button className='Boton-Contador' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;