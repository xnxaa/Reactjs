import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGoogle from "../../component/ButtonGoogle";
import { useLocalStorage } from "../../hooks/localStorage";

export const LoginPage = () => {
  const [credential] = useLocalStorage("credential");
  const navigate = useNavigate();

  const checkLogin = () => {
    if (credential) {
      navigate("/home");
    }
  };

  useEffect(() => {
    checkLogin();
  }, [credential]);

  return (
    <>
      <h1>Login Page</h1>
      <ButtonGoogle />
    </>
  );
};

