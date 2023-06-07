import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // cara mengambil data storage
    const value = JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));
    const [state, setState] = useState(initialValue);
    return [
        state,
        (value) => {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value)
        }
    ]
}