import { useState } from "react";

interface MyProps {
    suggestions: Array<string>,
    classes: string,
    placeholder: string
}

const AutoComplete = ( outerProps: MyProps ) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<string>>([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const onChange = (e: any) => {
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = outerProps.suggestions.filter(
          (suggestion: any) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e: any) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (e: any) => {

    }
   
    return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        className={outerProps.classes}
        placeholder={outerProps.placeholder}
      />
    </>
  );
};
export default AutoComplete;