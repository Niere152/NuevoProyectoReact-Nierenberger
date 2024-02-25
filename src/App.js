import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import PruebaFirebase from './components/PruebaFirebase';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from '../src/components/Context/CartContext';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
            <Routes>
              <Route path='/' element= {<ItemListContainer />}></Route>
              <Route path='/PruebaFirebase' element={<PruebaFirebase></PruebaFirebase>}></Route>
              <Route path='/ShoppingCart' element={<ShoppingCart></ShoppingCart>}></Route>
              <Route path='/category/:categoryId' element= {<ItemListContainer />}></Route>
              <Route path='/item/:itemId' element= {<ItemDetailContainer />}></Route>
              <Route path='*' element= {<h1>404 NOT FOUND</h1>}></Route>
            </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
