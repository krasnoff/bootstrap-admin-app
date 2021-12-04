import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navigator.module.scss'; // Import css modules stylesheet as styles
import { faChartArea, faCog, faLaughWink } from '@fortawesome/free-solid-svg-icons'
import { SingleItem } from '../../Types/Navigator/SingleItem';
import MainMenuItem from '../../Types/Navigator/MainMenuItem';
import MenuItemObj from './MenuItem/menuItem';

function Nav() {
    const MenuItems: Array<MainMenuItem> = [{
        title: 'Charts',
        url: 'charts',
        iconDefinition: faChartArea
    },{
        title: 'Component',
        iconDefinition: faCog,
        subMenuItem: {
            title: 'somthing',
            items: [{
                title: 'sub menu 1',
                url: 'fffff'
            },{
                title: 'sub menu 2',
                url: 'ggggg'
            }]
        }
    }];

    const handleItemClick = (evt: any, el: SingleItem) => {
        console.log('outer frame...', evt, el);
    }
    
    return (<ul className={['navbar-nav', styles.sidebar].join(' ')}>
        <span className={[styles.sidebarBrand, 'd-flex', 'align-items-center', 'justify-content-center'].join(' ')}>
            <div className={[styles.sidebarBrandIcon, styles.rotateN15].join(' ')}>
                <FontAwesomeIcon icon={faLaughWink} />
            </div>
            <div className={[styles.sidebarBrandText, styles.mx3].join(' ')}>SB Admin <sup>2</sup></div>
        </span>
        <hr className={styles.sidebarDivider} />
        <div className={styles.sidebarHeading}>Interface</div>

        {MenuItems.map((el, index) => 
            <MenuItemObj handleItemClick={handleItemClick} mainMenuItem={el} key={index}></MenuItemObj>
        )}
    </ul>);
}

export default Nav;