import axios from 'axios';
import { useQuery } from 'react-query';

const fetchLeaderboarddData = async () => {
  const JSONBIN_URL = "https://api.jsonbin.io/v3/b/6526d29f54105e766fc0f571"; // replace YOUR_BIN_ID with your bin's ID
  const JSONBIN_SECRET_KEY =
    "$2b$10$YxbqwbOKdtHuIbmpSPeL/Os5qRUvgaOj5TpY2iuVsSIDBAQZN2ULW"; // replace with your secret key from JSONBin

  const headers = {
    "secret-key": JSONBIN_SECRET_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(JSONBIN_URL, { headers });
    return response.data.record; // This will return the JSON you stored in the bin
  } catch (error) {
    console.error("Error fetching data from JSONBin:", error);
    throw error;
  }
};

export const useTimeline = () => {
  const queryResult = useQuery("timelineData", fetchLeaderboarddData);

  // Here, you can also format or process the data further if needed

  return {
    data: queryResult.data,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError,
    isSuccess: queryResult.isSuccess,
  };
};
