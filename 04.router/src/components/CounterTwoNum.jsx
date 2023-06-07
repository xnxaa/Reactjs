import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react"

export const CounterTwoNum = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const resultDirect = a + b;

    const result = useMemo(() => {
        return a + b;
    }, [a, b]);
//  void itu fungsi
    const handleIncrementA = useCallback(() =>{ setA(a + 1)}, [a])
    const handleIncrementB = useCallback(() =>{ setB(b + 1)}, [b])

// use memo itu return number, usecallback return void/fungsi

    return <div>
        <h2> COunter Two Number</h2>
        <p> A: {a}, B: {b}, Result Memo: {result}, Result Direct: {resultDirect} </p>
        {/* usememo */}
        {/* <button onClick={() =>setA(a+ 1)}> Increment A</button>
        <button onClick={() =>setB(b+ 1)}> Increment B</button> */}
        <button onClick={handleIncrementA}> Increment A</button>
        <button onClick={handleIncrementB}> Increment B</button>
    </div>
}