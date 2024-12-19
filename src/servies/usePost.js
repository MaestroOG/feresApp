import { useState } from "react";
import api from "./services/apiConfig"; // Ensure the correct relative path

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (endpoint, body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(endpoint, body);

      if (!response?.data || response.data.success === false) {
        throw new Error("Failed to post data or success flag is false");
      }

      return response.data; // Return data on success
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An unknown error occurred";
      setError(errorMessage);
      throw err; // Re-throw for further handling
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, post };
};
