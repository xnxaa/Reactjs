import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/localStorage";

export const FormLogin = () => {

    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('login', false);

    const login = () => {
        if(username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            navigate('/');
            return;
        }
        alert(`Username atau password salah`);
    }
    useEffect(() =>  {
        isLoggedIn && navigate('/');
    }, [])

    
    return <div>
        <input 
            type="text" 
            value={username}
            onChange={({ target: { value } }) => setUsername(value)} 
            placeholder="Username"/><br/>
        <input 
            type="password" 
            value={password}
            onChange={({ target: { value } }) => setPassword(value)} 
            placeholder="Password"/><br/>
        <button onClick={login}>Login</button>
    </div>
}