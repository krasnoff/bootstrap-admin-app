import { useCallback, useState } from "react";
import AutoComplete from "../Types/Header/AutoComplete";

export function useAsyncAutoComplete() {
    const [data, setData] = useState<AutoComplete>();
    const [error, setError] = useState<unknown>();

    const fetchData = async (searchString: string) => {
        try {
          const res = await fetch(`https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${searchString}`, {
                headers: {
                    'x-api-key': 'KhgDfpdyUt2wtkWRmkN86aOQFbCbvvbk9jH92MGb',
                    'Content-Type': 'application/json'
                }
            });
          const json = await res.json();
  
          setData(json);
        } catch (error) {
          setError(error);
        }
    };

    const sendAutoComplete = useCallback((searchString: string) => {
        fetchData(searchString);
    }, [])

    return {data, sendAutoComplete, error};
}