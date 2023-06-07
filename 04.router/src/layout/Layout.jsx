import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/localStorage";
import { useEffect } from "react";

export const Layout = (props) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('login', false);
    useEffect(() =>  {
        !isLoggedIn && navigate('/');
    }, [])
    const logout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    }
    return (
        <div>
        <div>
            {/* <Link to="/login">Login</Link> */}
            <Link to="/counter">Counter</Link>
            <Link to="/luas-lingkaran">Luas Lingkaran</Link>
            <Link to="/luas-segitiga">Luas Segitiga</Link>
            <Link to="/counter-two-num">Counter To Num</Link>
            <Link to="/form-text">Form Text</Link>
            <Link to="/">Nilai</Link>
            <button onClick={logout}>Logout</button>
        </div>
        {props.children}
</div>
    );
}