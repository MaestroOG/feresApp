import { useState } from "react";
import api from "./apiConfig";

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (endpoint, body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(endpoint, body);
      const { data } = response;

      if (!data || data.success === false) {

        return null; // Explicitly return null in case of failure
      }

      return data; // Return the response data directly
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
      setError(errorMessage);
      throw new Error(errorMessage); // Re-throw with a detailed message
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, post };
};