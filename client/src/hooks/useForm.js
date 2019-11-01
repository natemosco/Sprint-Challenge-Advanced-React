import { useState } from "react";

export const useForm = (initialValue, cb) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        handleChange: e => {
            setValue(e.target.value);
            cb(e.target.value);
        }

    };
};