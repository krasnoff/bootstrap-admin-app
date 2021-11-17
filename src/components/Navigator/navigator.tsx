import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navigator.module.scss'; // Import css modules stylesheet as styles
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (<ul className={['navbar-nav', styles.sidebar].join(' ')}>
        <span className={[styles.sidebarBrand, 'd-flex', 'align-items-center', 'justify-content-center'].join(' ')}>
            <div className={[styles.sidebarBrandIcon, styles.rotateN15].join(' ')}>
                <FontAwesomeIcon icon={faLaughWink} />
            </div>
            <div className={[styles.sidebarBrandText, styles.mx3].join(' ')}>SB Admin <sup>2</sup></div>
        </span>
    </ul>);
}

export default Nav;