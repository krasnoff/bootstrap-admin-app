import styles from './header.module.scss';
import HeaderMenu from './HeaderMenu/headerMenu';
import SearchBox from './SearchBox/searchBox';

function Header() {
    return (
        <nav className={[styles.navbar, styles.navbarExpand, 'navbar-light bg-white topbar mb-4 static-top shadow'].join(' ')}>
            <SearchBox></SearchBox>
            <HeaderMenu></HeaderMenu>
        </nav>
    );
}

export default Header;