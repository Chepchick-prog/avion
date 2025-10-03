import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/global.css';
import './styles/component.css'

import ProductProvider from './component/context/ProductContext';
import FilterProvider from './component/context/FilterContext';

import HomePage from './page/Home';
import AboutPage from './page/About';
import ProductPage from './page/Product';
import CatalogListingsPage from './page/ProductListings';
import Navigation from './component/features/Navigation';
import BusketsPage from './page/Baskets';



function App() {
  return (
    <ProductProvider>
      <FilterProvider>
        <BrowserRouter basename='/avion/'>
          <Navigation/>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='baskets' element={<BusketsPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='catalog/:catalogId' element={<CatalogListingsPage/>}/>
            <Route path='product/:productId' element={<ProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </ProductProvider>
  );
}

export default App;
