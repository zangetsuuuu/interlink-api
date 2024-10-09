import { useState, useCallback } from 'react';
import { useFetch } from '@/hooks';

const useInputHandler = (apiUrl, baseUrl, queryKey) => {
    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const { data, loading, error } = useFetch(url);

    const handleInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleClearInput = useCallback(() => {
        setInputValue('');
    }, []);

    const handleButtonClick = useCallback(() => {
        if (inputValue.trim()) {
            const encodedQuery = encodeURIComponent(inputValue);
            setUrl(`${baseUrl}${apiUrl}${queryKey}${encodedQuery}`);
            setShowResult(true);
        }
    }, [inputValue, apiUrl, baseUrl, queryKey]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === 'Enter') handleButtonClick();
        },
        [handleButtonClick]
    );

    return {
        inputValue,
        setInputValue,
        data,
        loading,
        error,
        showResult,
        handleInputChange,
        handleClearInput,
        handleButtonClick,
        handleKeyDown,
    };
};

export default useInputHandler;
