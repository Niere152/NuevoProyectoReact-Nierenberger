import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom'; 
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo-tienda-lapices.jpg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><img src={Logo} alt='LogoTienda'className='Logo'></img></Link>
            <div className='Tres-Botones'>
                <NavLink to={`/category/ELEMENTAL`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button>ELEMENTAL</button></NavLink>
                <NavLink to={`/category/PROFESIONAL`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button>PROFESIONAL</button></NavLink>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar;