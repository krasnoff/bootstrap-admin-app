import styles from './headerMenuItemName.module.scss';

function HeaderMenuItemName() {
    return (
        <li className={[styles.navItem, 'dropdown no-arrow'].join(' ')}>
            <a className={[styles.navLink, 'dropdown-toggle'].join(' ')} href="#" id="userDropdown" role="button">
                <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>Douglas McGee</span>
                <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src="img/undraw_profile.svg" />
            </a>
        </li>
    )
}

export default HeaderMenuItemName;