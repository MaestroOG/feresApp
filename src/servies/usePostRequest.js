// services/usePostRequest.js
import { useState } from 'react';
import api from './apiConfig';

export const usePostRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const postRequest = async (endpoint, body) => {
        setLoading(true);
        setError(null);

        try {
            const res = await api.post(endpoint, body);
            setResponse(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, response, postRequest };
};
