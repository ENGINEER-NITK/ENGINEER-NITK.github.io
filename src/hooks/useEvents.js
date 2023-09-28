import { useQuery } from "react-query";
import axios from "axios";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const fetchEventsData = async() => {
    const JSONBIN_URL = "https://api.jsonbin.io/v3/b/650ac7aaadb5f56d8f18525b"; // replace YOUR_BIN_ID with your bin's ID
    const JSONBIN_SECRET_KEY =
        "$2a$10$ALWgRdFMPxMOF8WhLWbVmuC1Q.mfj6P/O1CvmwCXLT9LRC4HM6Woq"; // replace with your secret key from JSONBin

    const headers = {
        "secret-key": JSONBIN_SECRET_KEY,
        "Content-Type": "application/json",
    };

    try {
        const response = await axios.get(JSONBIN_URL, { headers });
        return response.data.record.events; // This will return the JSON you stored in the bin
    } catch (error) {
        console.error("Error fetching data from JSONBin:", error);
        throw error;
    }
};

export const useEventData = () => {
    const queryResult = useQuery("eventsData", fetchEventsData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
    });

    // Here, you can also format or process the data further if needed

    return {
        data: queryResult.data,
        isLoading: queryResult.isLoading,
        isError: queryResult.isError,
        isSuccess: queryResult.isSuccess,
    };
};
