import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions';


const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };


  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;
