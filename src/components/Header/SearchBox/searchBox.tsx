import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchBox.module.scss';

function SearchBox() {
    return (
    <form className={styles.navbarSearch}>
        <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." />
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