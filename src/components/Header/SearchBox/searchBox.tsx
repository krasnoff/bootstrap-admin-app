import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchBox.module.scss';
import Autocomplete from '../../General/AutoComplete/AutoComplete'
import { Item } from '../../../Types/Header/AutoComplete';

function SearchBox() {
    const selectSymbolHandler = (selectedSymbol: Item) => {
        console.log('selectSymbolHandler', selectedSymbol);
    }
    
    return (
    <form className={styles.navbarSearch}>
        <div className={styles.inputGroup}>
            <Autocomplete
                classes="form-control bg-light border-0 small"
                placeholder="Search for..."
                onSelectSymbol={(selectedSymbol: Item) => selectSymbolHandler(selectedSymbol)}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    </form>
    )
}

export default SearchBox;