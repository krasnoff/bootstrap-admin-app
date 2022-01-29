import styles from './SuggestionsListComponent.module.scss';

interface MyProps {
  filteredSuggestions: any,
  activeSuggestionIndex: number,
  onClick: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
}

const SuggestionsListComponent = (outerProps: MyProps) => {
    return outerProps.filteredSuggestions.length ? (
      <ul className={styles.suggestions}>
        {outerProps.filteredSuggestions.map((suggestion: string, index: number) => {
          let myClassName;
          if (index === outerProps.activeSuggestionIndex) {
            myClassName = styles.suggestionActive;
          }
          return (
            <li className={myClassName} key={index} onClick={outerProps.onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className={styles.noSuggestions}>
        <em>No suggestions, you're on your own!</em>
      </div>
    );
};

export default SuggestionsListComponent;