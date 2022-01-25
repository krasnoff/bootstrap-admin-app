interface MyProps {
  filteredSuggestions: any,
  activeSuggestionIndex: number,
  onClick: React.MouseEventHandler<HTMLLIElement>
}

const SuggestionsListComponent = (outerProps: MyProps) => {
    return outerProps.filteredSuggestions.length ? (
      <ul className="suggestions">
        {outerProps.filteredSuggestions.map((suggestion: any, index: any) => {
          let myClassName;
          // Flag the active suggestion with a class
          if (index === outerProps.activeSuggestionIndex) {
            myClassName = "suggestion-active";
          }
          return (
            <li className={myClassName} key={suggestion} onClick={outerProps.onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
};

export default SuggestionsListComponent;