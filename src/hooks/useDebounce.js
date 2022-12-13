import { useState, useEffect } from 'react';

// 1: ''
// 2: 'h'
// 3: 'ho'
// 4: 'hoa'
function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value); // ''

    useEffect(() => {
        const handler = setTimeout(() => {
            // console.log('Set timeout', value);
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
            // console.log('Call clear timeout, ', value, handler);
        };
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
