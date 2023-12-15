import { useEffect, useState } from "react";

export const useDebounce = (value , dealay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebouncedValue(value)

        }, dealay)
        return ()=>clearTimeout(timeout)
    }, [value ,dealay])
    return debouncedValue   
}