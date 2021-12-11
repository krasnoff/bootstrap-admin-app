import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.scss';

function Header() {
    return (
        <nav className={[styles.navbar, styles.navbarExpand, 'navbar-light bg-white topbar mb-4 static-top shadow'].join(' ')}>
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
            <ul className={styles.navbarNav}>
              <li className={[styles.navItem, 'dropdown no-arrow mx-1'].join(' ')}>
                <a className={[styles.navLink, styles.navLinkIcon, 'dropdown-toggle'].join(' ')} href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className={[styles.badge, styles.badgeDanger, styles.badgeCounter].join(' ')}>7</span>
                </a>
              </li>
              <div className={[styles.topbarDivider, 'd-none d-sm-block'].join(' ')}></div>
              <li className={[styles.navItem, 'dropdown no-arrow'].join(' ')}>
                <a className={[styles.navLink, 'dropdown-toggle'].join(' ')} href="#" id="userDropdown" role="button">
                  <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>Douglas McGee</span>
                  <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src="img/undraw_profile.svg" />
                </a>
              </li>
            </ul>
          </nav>
    );
}

export default Header;