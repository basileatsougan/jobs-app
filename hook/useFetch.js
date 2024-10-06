import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
        'x-rapidapi-key': '9b493e83e2mshbe6cd7f97bff50dp19d07ajsn3a915e020448',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
    };


    const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {

            alert('There is an error')
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect (() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };


    return { data, isLoading, error, refetch };
};   


export default useFetch;