// services/useGetRequest.js
import { useState } from "react";
import api from "./apiConfig";

export const useGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const getRequest = async (endpoint, params = {}) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get(endpoint, { params });
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, getRequest };
};
