import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom'; 
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo-tienda-lapices.jpg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='Tres-Botones'>
                <Link to='/'><img src={Logo} alt='LogoTienda'className='Logo'></img></Link>
                <NavLink to={`/category/ELEMENTAL`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className='btn btn-success' style={{marginRight: 20}}>ELEMENTAL</button></NavLink>
                <NavLink to={`/category/PROFESIONAL`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><button className='btn btn-success' style={{marginRight: 20}}>PROFESIONAL</button></NavLink>
                <Link to='../PruebaFirebase'><button className='btn btn-success' style={{marginRight: 20}}>CATÁLOGO</button></Link>
                <Link to='../ShoppingCart'><CartWidget><button className='btn btn-success'></button></CartWidget></Link>
            </div>
        </nav>
    )
}

export default NavBar;