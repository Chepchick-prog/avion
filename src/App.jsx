import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/Home/Home';
import AboutPage from './page/About/About';
import ProductPage from './page/Product/Product';
import CatalogListingsPage from './page/ProductListings/ProductListings';
import Navigation from './component/features/Navigation/Navigation';
import BusketsPage from './page/Baskets/Baskets';

import './styles/reset.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter basename='/avion/'>
      <Navigation/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='buskets' element={<BusketsPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='catalog/:catalogId' element={<CatalogListingsPage/>}/>
        <Route path='product/:productId' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
