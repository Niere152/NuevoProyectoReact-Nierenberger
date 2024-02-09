import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import { getProductsByCategory } from './components/InfoProducts/InfoProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={'BIENVENIDOS'}></ItemListContainer>}></Route>
          <Route path='/category/:ELEMENTAL' element= {<ItemListContainer greeting={getProductsByCategory}></ItemListContainer>}></Route>
          <Route path='/category/:PROFESIONAL' element= {<ItemListContainer greeting={getProductsByCategory}></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='*' element= {<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
