"use client"

import { GoogleLogin} from "@react-oauth/google"
import { useLocalStorage} from "../hooks/localStorage"
import { useEffect } from "react";


export const ButtonGoogle = () => {
 const[credential, setCredentialStorage] = useLocalStorage('credential')
 const onCredentialSuccess = (response) => {
    setCredentialStorage (response.credential)
}
const onCredentialError = (error) => {
    console.log(error)
}
useEffect(() => {
}, credential)
return ( <div>
        <GoogleLogin onSuccess={onCredentialSuccess} onError={onCredentialError}>

        </GoogleLogin>
    </div>
    ) 
}