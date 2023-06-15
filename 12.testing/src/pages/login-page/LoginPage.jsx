import { useEffect } from "react";
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { useLocalStorage } from "../../hooks/localStorage";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const credentials = useLocalStorage('credentials')
    const navigate = useNavigate()
    useEffect(() => {
        credentials && navigate('/home')
    }, credentials)
    return <div style={{textAlign: 'center'}}>
        <h1>Login Page</h1>
        <ButtonGoogle/>
    </div>
}