import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Cart from './Pages/Home/Cart/Cart';
import Products from './Pages/Products/Products';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrders/MyOrder';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<MyOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
