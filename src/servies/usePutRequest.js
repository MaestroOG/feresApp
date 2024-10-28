// services/usePutRequest.js
import { useState } from "react";
import api from "./apiConfig";

export const usePutRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const putRequest = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.put(endpoint, body);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, putRequest };
};
