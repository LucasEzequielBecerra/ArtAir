import 'bootstrap/dist/css/bootstrap.min.css';


import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './Routes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Routes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './Routes/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Home from './Routes/Home/Home';
import Section from './Routes/Section/Section'
import CheckoutCart from './Routes/CartCheckout/CheckoutCart';
import { exportDataWithBatch } from './services/firestore';


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
              <Route path='/checkout' element={<CheckoutCart />} />

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
