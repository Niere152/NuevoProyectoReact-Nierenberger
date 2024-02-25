import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../Context/CartContext'; 
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({name, img, category, description, price, stock}) => {

    const [ quantityAdded, setQuantityAdded ] = useState(0)

    const { addItem } = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            img, name, price
        }

        addItem (item, quantity)
    }

    return (
        <article className="card-detalles">
            <header className='nombre-producto'>
                <h2>{name}</h2>
            </header>
            <img className='imagen-producto' src={img} alt={name}></img>
            <div className='datos-producto'>
                <p className='info'>Categoría: {category}</p>
                <p className='info'>Descripción: {description}</p>
                <p className='info'>Precio: ${price}</p>
                <p className='info'>Stock disponible: {stock}</p>
            </div>
            <footer className='itemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/ShoppingCart' className='Option'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
            
        </article>
    )
}

export default ItemDetail;