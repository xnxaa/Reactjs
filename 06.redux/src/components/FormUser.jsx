import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName } from "../store/user";

export const FormUser = () => {
    const user = useSelector(state => state.user)
    const dispatcher = useDispatch();
    return <div>
     
        <h2>Form User</h2>
        <div>

    <div style={{textAlign: 'center'}}>Name</div>
    <input type="text" value={user.name}
    onChange={( { target: {value }}) => dispatcher(setName(value))}/><br/>
    <div style={{textAlign: 'auto'}}>Email</div>
    <input type="email" value={user.email}
    onChange={( { target: {value }}) => dispatcher(setEmail(value))}/><br/></div>
    </div>
}