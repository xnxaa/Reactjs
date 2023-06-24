import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions';


const Coba = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

    const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Coba;
