import { useEffect, useState } from "react";
import AutoComplete from "../Types/Header/AutoComplete";

export function useAsyncAutoComplete(searchStr: string) {
    const [data, setData] = useState<AutoComplete>();

    useEffect(() => {
        fetch(`https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=${searchStr}`, {
            headers: {
                'x-api-key': 'KhgDfpdyUt2wtkWRmkN86aOQFbCbvvbk9jH92MGb',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            setData(json);
        }).catch((error) => {
            console.log('error', error)
        });

        return () => {
            // data: data;
        }
    }, []);

    return data;
}