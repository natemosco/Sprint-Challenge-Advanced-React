import React from 'react'
import { useForm } from "../hooks/useForm";


export default function Form(props) {
    const { value, handleChange } = useForm(props.favoritePlayer, props.customOnChange)
    return (
        <div>
            <form action="submit">
                <label htmlFor="pickPlayer">Pick your player:</label>
                <input type="text" id="pickPlayer" placeholder={value} onChange={handleChange} />
            </form>
        </div>
    )
}
