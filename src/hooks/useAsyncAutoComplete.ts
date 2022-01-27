import { useCallback, useState } from "react";
import AutoComplete from "../Types/Header/AutoComplete";

export function useAsyncAutoComplete() {
    const [data, setData] = useState<AutoComplete>();
    const [searchStr, setSearchStr] = useState<string>();

    const fetchDataFunc = () => {
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
    }

    const setSearchString = useCallback((searchString: string) => {
        // console.log('useCallback', searchString)
        setSearchStr(searchString)
        // console.log('useCallback - 2', searchStr)
    }, [searchStr])

    const fetchDataAsync = useCallback(() => {
        fetchDataFunc();
    }, [searchStr])

    return {data, setSearchString, fetchDataAsync};
}