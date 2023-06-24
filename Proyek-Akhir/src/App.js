import NotFound from './pages/Styles/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Footer from './pages/Styles/Footer';
import Login from './pages/Login/Login';
import AdminPage from './pages/admin';
import Coba from './pages/coba';
import Register from './pages/Register/Register';
import RegisterRead from './pages/Register/RegisterRead';
import RegisterSuccess from './pages/Register/RegisterSuccess';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />  
        <Route path="/coba" element={<Coba />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-read" element={<RegisterRead />} />
        <Route path="/register-success" element={<RegisterSuccess />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
