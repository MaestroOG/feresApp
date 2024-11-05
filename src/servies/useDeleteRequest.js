// services/useDeleteRequest.js
import { useState } from "react";
import api from "./apiConfig";

export const useDeleteRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const deleteRequest = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.delete(endpoint, endpoint);
      setResponse(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, deleteRequest };
};
