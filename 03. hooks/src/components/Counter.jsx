import { useContext } from "react"
import { CounterContext } from "../context/CounterProvider"

export const Counter = () => {
    const { count, setCount} = useContext(CounterContext)

return <div>
    <h2>Counter</h2>
    <p>Count: {count}</p>
    <button onClick={() =>setCount(count + 1)}>Increment</button>
    <button onClick={() =>setCount(count - 1)} disabled={count <= 0}
    >Decrement</button>
</div>
}