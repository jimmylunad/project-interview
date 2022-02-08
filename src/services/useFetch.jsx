import { useState } from 'react';
import axios from 'axios';

const useFetch = ({
  initialUrl = '',
  initialForm = {},
  initialMethod = 'get',
  initialContentType = 'application/json',
  isLoading = false,
} = {}) => {
  const [loading, setLoading] = useState(isLoading);

  const fetch = async ({
    url,
    form,
    method,
    contentType,
  } = {}) => {
    setLoading(true);
    try {
      const response = await axios({
        url: url || initialUrl,
        method: method || initialMethod,
        data: form || initialForm,
        headers: {
          'content-type': contentType || initialContentType,
        },
      });

      setLoading(false);
      return response;
    } catch (e) {
      return {
        status: e.status,
        message: e.message,
      };
    }
  };

  return {
    fetch,
    loading,
  };
};

export default useFetch;
