import { useState } from "react"
import { useRef } from "react"

export const FormText = () => {
    const textFieldRef = useRef(null)
    const [text, setText] = useState('')

    const onSubmit = () => {
        const text = textFieldRef.current.value
        setText(text)
        // current adalah DOM nya/ inputnya yang akan diambil valuenya
        textFieldRef.current.value = ''
    }

    return <div>
        <h2>Form</h2>
        {/* currentnya adalah input */}
        <input type="text" ref={textFieldRef} />
        <button onClick={onSubmit} type="submit">Submit</button>
        <p>Text: {text} </p>
    </div>
}