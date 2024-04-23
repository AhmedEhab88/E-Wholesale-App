import { useEffect, useState } from 'react';

function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [error, setError] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;
