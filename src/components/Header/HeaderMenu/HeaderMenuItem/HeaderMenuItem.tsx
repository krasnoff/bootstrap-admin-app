import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './headerMenuItem.module.scss';

function HeaderMenuItem() {
    return (
        <li className={[styles.navItem, 'dropdown no-arrow mx-1'].join(' ')}>
            <a className={[styles.navLink, styles.navLinkIcon, 'dropdown-toggle'].join(' ')} href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className={[styles.badge, styles.badgeDanger, styles.badgeCounter].join(' ')}>7</span>
            </a>
        </li>
    );
}

export default HeaderMenuItem;