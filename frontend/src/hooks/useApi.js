import useSWR from "swr";

import api from "../services/api";

const useApi = (url) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });
  return { data, error };
};

export default useApi
