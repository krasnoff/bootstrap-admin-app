import { useCallback, useState } from "react";
import AutoComplete from "../Types/Header/AutoComplete";

export function useAsyncAutoComplete() {
    const [data, setData] = useState<AutoComplete>();
    const [error, setError] = useState<unknown>();

    const fetchData = async (searchString: string) => {
        try {
          const REACT_APP_SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
          const res = await fetch(`${REACT_APP_SERVER_BASE_URL}/v6/finance/autocomplete?region=US&lang=en&query=${searchString}`, {
                headers: {
                    'x-api-key': process.env.REACT_APP_API_KEY as string,
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