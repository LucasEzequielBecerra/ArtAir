import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Section from './components/Section/Section'


function App() {



  return (
    <>

      <div >
        <CartContextProvider>

          <BrowserRouter>
            <BasicExample />
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/new' element={<Section sectionName='Novedades' />} />
              <Route path='/offer' element={<Section sectionName='Ofertas' />} />
              <Route path='/products' element={<ItemListContainer />} />
              <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/cartView' element={<CartContainer />} />


              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </div>

    </>
  );
}

export default App;
