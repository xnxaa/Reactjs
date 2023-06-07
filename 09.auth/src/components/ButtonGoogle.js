import { GoogleLogin} from "@react-oauth/google"
import { useLocalStorage} from "../hooks/localStorage"

export const ButtonGoogle = () => {
 const[, setCredentialStorage] = useLocalStorage('credential')
 const onCredentialSuccess = (response) => {
    setCredentialStorage (response.credential)
}
const storage = useLocalStorage('credential')
const onCredentialError = (error) => {
    console.log(error)
}

return ( <div>
        <GoogleLogin onSuccess={onCredentialSuccess} onError={onCredentialError}>

        </GoogleLogin>
    </div>
    )
}