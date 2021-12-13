import styles from './headerMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem';

function HeaderMenu() {
    return (
        <ul className={styles.navbarNav}>
            <HeaderMenuItem></HeaderMenuItem>
            <div className={[styles.topbarDivider, 'd-none d-sm-block'].join(' ')}></div>
            <li className={[styles.navItem, 'dropdown no-arrow'].join(' ')}>
            <a className={[styles.navLink, 'dropdown-toggle'].join(' ')} href="#" id="userDropdown" role="button">
                <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>Douglas McGee</span>
                <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src="img/undraw_profile.svg" />
            </a>
            </li>
        </ul>
    );
}

export default HeaderMenu;