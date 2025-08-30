import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/global.css';
import './styles/component.css'


import HomePage from './Page/Home';
import AboutPage from './Page/About';
import ProductPage from './Page/Product';
import ProductListingsPage from './Page/ProductListings';
import Navigation from './component/Navigation';
import BusketsPage from './Page/Baskets';
import ProductProvider from './component/context/ProductContext';


function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/baskets' element={<BusketsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/products' element={<ProductListingsPage/>}/>
          <Route path='/products/:productId' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
