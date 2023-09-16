import { useQuery } from "react-query";
import axios from "axios";

const fetchEventsData = async() => {
    const JSONBIN_URL = "https://api.jsonbin.io/v3/b/6505e5a9d972192679c4fac3"; // replace YOUR_BIN_ID with your bin's ID
    const JSONBIN_SECRET_KEY =
        "$2b$10$Nd1poh1Gk4ivUHb1UR7fWuJUH760qVFblohLdmVVFyqGxUGtQ0IUG"; // replace with your secret key from JSONBin

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
    const queryResult = useQuery("eventsData", fetchEventsData);

    // Here, you can also format or process the data further if needed

    return {
        data: queryResult.data,
        isLoading: queryResult.isLoading,
        isError: queryResult.isError,
        isSuccess: queryResult.isSuccess,
    };
};