import { useEffect, useState } from "react";
import SuggestionsListComponent from "./SuggestionsListComponent/SuggestionsListComponent";
import styles from './AutoComplete.module.scss';
import { useAsyncAutoComplete } from "../../../hooks/useAsyncAutoComplete";
import AutoCompleteObj, { Item } from "../../../Types/Header/AutoComplete";

interface MyProps {
    classes: string,
    placeholder: string,
    onSelectSymbol: (selectedSymbol: Item | null) => void
}

const AutoComplete = ( outerProps: MyProps ) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<string>>([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const {data, sendAutoComplete, error} = useAsyncAutoComplete();

    const onChange = (e: any) => {
        const userInput = e.target.value;
        sendAutoComplete(userInput);
        setInput(e.target.value);
    };

    const onClick = (e: any) => {
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        
        const selectedItem = data?.ResultSet.Result.find(el => el.name === e.target.innerText);
        if (selectedItem) {
          outerProps.onSelectSymbol(selectedItem);
        }
    };

    const onKeyDown = (e: any) => {
      outerProps.onSelectSymbol(null);
    }

    const setSuggestions = (data: AutoCompleteObj | undefined) => {
      if (data && data.ResultSet) {
        setFilteredSuggestions(data.ResultSet.Result.map(el => el.name).sort((a, b) => a.localeCompare(b)));
        setShowSuggestions(true);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
      }
    }

    useEffect(() => {
      if (error) {} else if (data) {
        setSuggestions(data);
      }
    }, [data, error]);
   
    return (
    <div className={styles.inputText}>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        className={outerProps.classes}
        placeholder={outerProps.placeholder}
      />
      {showSuggestions && input && <SuggestionsListComponent 
                                      filteredSuggestions={filteredSuggestions} 
                                      activeSuggestionIndex={activeSuggestionIndex} 
                                      onClick={onClick} />}
    </div>
  );
};
export default AutoComplete;