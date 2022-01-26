import { useState } from "react";
import SuggestionsListComponent from "./SuggestionsListComponent/SuggestionsListComponent";
import styles from './AutoComplete.module.scss';
import { useAsyncAutoComplete } from "../../../hooks/useAsyncAutoComplete";

interface MyProps {
    classes: string,
    placeholder: string
}

const AutoComplete = ( outerProps: MyProps ) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<string>>([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const data = useAsyncAutoComplete('apple');
    // console.log('data', data)

    const suggestions: Array<string> = [
      "Alligator",
      "Bask",
      "Crocodilian",
      "Death Roll",
      "Eggs",
      "Jaws",
      "Reptile",
      "Solitary",
      "Tail",
      "Wetlands"
    ]

    const onChange = (e: any) => {
        // console.log('change', e);
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
          (suggestion: any) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e: any) => {
        console.log('click', e.target.innerText);
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (e: any) => {

    }
   
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