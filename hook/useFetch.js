import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, seError] = useState(null);


    const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/estimated-salary/${endpoint}`,
    params: { ...query
        // job_title: 'NodeJS Developer',
        // location: 'New-York, NY, USA',
        // radius: '100'
    },
    headers: {
        'x-rapidapi-key': '9b493e83e2mshbe6cd7f97bff50dp19d07ajsn3a915e020448',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
    };

    const fetchData = async() => {
        setIsLoading(true);
    

    try {
        const response = await axios.request
        (options)

    } catch (error) {

    } finally {

    }

}


}