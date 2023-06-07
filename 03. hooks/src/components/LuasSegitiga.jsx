import { useEffect } from "react";
import {useState} from "react";

// nama const Luasegitiga harus diawali huruf kapital

export const LuasSegitiga = () => {
    const[alas, setAlas] =useState(0)
    const[tinggi, setTinggi] = useState(0)
    const[hasil, setHasil] = useState(0)

    useEffect(() => {
        // alert("component did mount")
        return () => {
            // alert('component will unmount')
        }
        //     setHasil(0.5 * alas * tinggi)
        // }, [alas, tinggi])
        }, [])

        useEffect(() => {
            setHasil(0.5 * alas * tinggi)
        }, [alas, tinggi])

        return <div>
                Alas:
                <input type="number" value={alas} onChange={(e) => setAlas(e.target.value)}/><br>
                </br>
                Tinggi:
                <input type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)}/>
                Luas: {hasil}
            </div>
    }

export default LuasSegitiga