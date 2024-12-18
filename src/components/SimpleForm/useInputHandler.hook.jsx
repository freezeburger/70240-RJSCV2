import { useCallback } from "react"

export const useInputHandler = (onChange) => {

    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange])

    return handleChange
}