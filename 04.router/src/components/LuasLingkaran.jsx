import { useEffect} from "react"
import { useState} from "react"
import {CounterContext} from "../context/CounterProvider"
import { useContext } from "react"

export const LuasLingkaran  = () => {
    const [jariJari, setJarijari] = useState(0)
    const [hasil, setHasil] = useState(0)
    const {count} = useContext(CounterContext)

    useEffect(() => {
        setHasil(22/7 * jariJari * jariJari)
    }, [jariJari])

    return <div>
        Count: { count } <br/>
        Jari-jari:
        <input type="number" value={jariJari} onChange={(e) => setJarijari(e.target.value)}/><br/>
        Luas: {hasil}
    </div>
}

export default LuasLingkaran