// services/usePostRequest.js
import { useState } from "react";
import api from "./apiConfig";

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (endpoint, body) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post(endpoint, body);
      if (res.data.success && res.data.success === false) {
        setError(true)
      }
      return res.data; // Return the response data directly
    } catch (err) {
      setError(err.message);
      throw err; // Throw the error to handle it when calling the function
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, post };
};
