import React from 'react'
import { useForm } from "../hooks/useForm";


export default function Form(props) {
    const { value, handleChange } = useForm(props.favoritePlayer)
    return (
        <div>
            <form action="submit">
                <label htmlFor="pickPlayer">Pick your player:</label>
                <input type="text" id="pickPlayer" value={value} onChange={handleChange} />
            </form>
        </div>
    )
}
