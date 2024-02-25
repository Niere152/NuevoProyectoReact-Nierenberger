import './Item.css'
import { Link } from 'react-router-dom'; 


const Item = ({id, name, img, price, stock}) => {
    return (
    <div className='Card-General'>
            <img src={img} className="card-img-top" alt={name}></img>
        <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${price}</li>
                <li className="list-group-item">Stock disponible: {stock}</li>
            </ul>
            <footer className='footer'>
                <button className='boton-detalles'><Link className='texto-link' to= {`/item/${id}`}>DETALLES</Link></button>
            </footer>
        </div>
    </div>
        
    )
}

export default Item;