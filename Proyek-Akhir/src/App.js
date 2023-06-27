import NotFound from './pages/Styles/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Footer from './pages/Styles/Footer';
import LoginForm from './pages/Login/Login';
import Register from './pages/Register/Register';
import RegisterRead from './pages/Register/RegisterRead';
import RegisterSuccess from './pages/Register/RegisterSuccess';
import HomePage from './pages/home-page/HomePage';
import Service1 from './pages/services-page/Service1';
import Service2 from './pages/services-page/Service2';
import Service3 from './pages/services-page/Service3';
import Cart from './pages/cart-page/Cart';
import CartSuccess from './pages/cart-page/CartSuccess';
import HistoryCart from './pages/cart-page/HistoryCart';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/register-read" element={<RegisterRead />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-success" element={<CartSuccess />} />
        <Route path="/history-cart" element={<HistoryCart />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
