import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchBox.module.scss';
import Autocomplete from '../../General/AutoComplete/AutoComplete'
import { Item } from '../../../Types/Header/AutoComplete';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SearchBox() {
    const [searchEnable, setSearchEnable] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<Item | null>();
    const navigate = useNavigate();

    const selectSymbolHandler = (selectedSymbol: Item | null) => {
        setSearchEnable(selectedSymbol ? false : true);
        setSelectedItem(selectedSymbol);
    }

    const clickHandler = () => {
        navigate(`/companyReview/${selectedItem?.symbol}/`);
    }
    
    return (
    <form className={styles.navbarSearch}>
        <div className={styles.inputGroup}>
            <Autocomplete
                classes="form-control bg-light border-0 small"
                placeholder="Search for..."
                onSelectSymbol={(selectedSymbol: Item | null) => selectSymbolHandler(selectedSymbol)}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button" disabled={searchEnable} onClick={() => clickHandler()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    </form>
    )
}

export default SearchBox;