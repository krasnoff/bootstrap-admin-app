import styles from './headerMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem';
import HeaderMenuItemName from './HeaderMenuItemName/headerMenuItemName';

function HeaderMenu() {
    return (
        <ul className={styles.navbarNav}>
            <HeaderMenuItem></HeaderMenuItem>
            <div className={[styles.topbarDivider, 'd-none d-sm-block'].join(' ')}></div>
            <HeaderMenuItemName></HeaderMenuItemName>
        </ul>
    );
}

export default HeaderMenu;