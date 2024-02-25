import React, { useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from './Context/CartContext';
import { CartItem } from './CartItem'

const ShoppingCart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext (CartContext)
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>LA CESTA ESTÁ VACÍA</h1>
      </div>
    )
  }

  return ( 
    <div>
      {cart.map (p => <CartItem key={p.id} {...p}></CartItem>)}
      <h3>TOTAL: ${total}</h3>
      <button onClick={() => clearCart}>VACIAR CESTA</button>
    </div>
  )
}

export default ShoppingCart;