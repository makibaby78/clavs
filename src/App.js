import React from 'react'
import './App.css'
import Header from './Screens/Header/Header'
import Home from './Screens/Home/Home'
import Catering from './Screens/Catering/Catering'
import Footer from './Screens/Footer/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ErrorPage from './Screens/ErrorPage/ErrorPage'
import Menu from './Screens/Menu/Menu'
import Cakes from './Screens/Cakes/Cakes'
import Cupcakes from './Screens/Cupcakes/Cupcakes'
import Contact from './Screens/Contact/Contact'
import Order from './Screens/Order/Order'
import Shoppingcart from './Screens/ShoppingCart/ShoppingCart'
import Headerv2 from './Screens/Header/Headerv2'
import ProductInfoTemplate from './Screens/ProductInfoTemplate/ProductInfoTemplate'
import Bread from './Screens/Bread/Bread'


function App() {
  return (
    <div className="App">
          <Router>
            <Header />
            <Headerv2 />
            <Routes>
              <Route path="/clavs" element={<Home />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/order" element={<Order/>} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cakes" element={<Cakes />} />
              <Route path="/cupcakes" element={<Cupcakes />} />
              <Route path="/bread" element={<Bread />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shoppingcart" element={<Shoppingcart />} />
              <Route path="/product-info" element={<ProductInfoTemplate />} />
            </Routes>
            <Footer />
          </Router>
    </div>
  );
}

export default App;
