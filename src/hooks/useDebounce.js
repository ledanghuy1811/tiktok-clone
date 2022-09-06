import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        if (value !== '') {
            const handler = setTimeout(() => setDebounceValue(value), delay);

            return () => clearTimeout(handler);
        } else {
            setDebounceValue(value);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
