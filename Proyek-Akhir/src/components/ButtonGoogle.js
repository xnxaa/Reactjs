import { GoogleLogin } from "@react-oauth/google";
import { useLocalStorage } from "../hooks/localStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ButtonGoogle = () => {
    const [credential, setCredentialStorage] = useLocalStorage('credential');
    const navigate = useNavigate();
  
    const onCredentialSuccess = (response) => {
      setCredentialStorage(response.credential);
    };
  
    const onCredentialError = (error) => {
      console.log(error);
    };
  
    useEffect(() => {
      if (credential) {
        navigate('/home');
      }
    }, [credential, navigate]);
  
    const handleLogout = () => {
      setCredentialStorage(null);
      navigate('/login');
    };
  
    return (
      <div>
        {credential ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <GoogleLogin
            onSuccess={onCredentialSuccess}
            onError={onCredentialError}
          />
        )}
      </div>
    );
  };
  