import './CartWidget.css'
import Carro from '../../assets/carrito-compra.jpg';

const CartWidget = () => {
    return (
        <div>
            <img src={Carro} alt='Cart Widget' className='Carro'></img>
            0
        </div>
    )
}

export default CartWidget;