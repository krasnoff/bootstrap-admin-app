import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navigator.module.scss'; // Import css modules stylesheet as styles
import { faChartArea, faCog, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { SingleItem } from '../../Types/Navigator/SingleItem';
import MainMenuItem from '../../Types/Navigator/MainMenuItem';
import MenuItemObj from './MenuItem/menuItem';
import { MenuTypes } from '../../Types/Navigator/MenuTypes';
import Seperator from './Seperator/seperator';
import SubHeader from './SubHeader/subHeader';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

function Nav() {
    const MenuItems: Array<MainMenuItem> = [
    {
        iconDefinition: faTachometerAlt,
        menuType: MenuTypes.Seperator
    },{
        title: 'Dashboard',
        url: 'Dashboard',
        iconDefinition: faTachometerAlt,
        menuType: MenuTypes.MenuItem
    },{
        iconDefinition: faTachometerAlt,
        menuType: MenuTypes.Seperator
    },{
        iconDefinition: faTachometerAlt,
        menuType: MenuTypes.SubHeader,
        title: 'Other Things'
    },{
        title: 'Charts',
        url: 'charts',
        iconDefinition: faChartArea,
        menuType: MenuTypes.MenuItem
    },{
        title: 'Form',
        url: 'form',
        iconDefinition: faWpforms,
        menuType: MenuTypes.MenuItem
    },{
        title: 'Component',
        iconDefinition: faCog,
        subMenuItem: {
            title: 'somthing',
            items: [{
                title: 'Lazy Loading...',
                url: 'SubMenu1'
            },{
                title: 'Guarded page',
                url: 'SubMenu2'
            },{
                title: 'React hooks demo',
                url: 'SubMenu3'
            }]
        },
        menuType: MenuTypes.MenuItem
    }];

    const handleItemClick = (evt: any, el: SingleItem) => {
        // console.log('outer frame...', evt, el);
    }

    const renderSwitch = (param: MainMenuItem, index: number) => {
        switch(param.menuType) {
            case MenuTypes.MenuItem:
                return <MenuItemObj handleItemClick={handleItemClick} mainMenuItem={param} key={index}></MenuItemObj>;
            case MenuTypes.Seperator:
                return <Seperator key={index}></Seperator>;
            case MenuTypes.SubHeader:
                return <SubHeader mainMenuItem={param} key={index}></SubHeader>;
            default:
                return null;
        }
    }
    
    return (<ul className={['navbar-nav', styles.sidebar].join(' ')}>
        <span className={[styles.sidebarBrand, 'd-flex', 'align-items-center', 'justify-content-center'].join(' ')}>
            <div className={[styles.sidebarBrandIcon, styles.rotateN15].join(' ')}>
                <FontAwesomeIcon icon={faLaughWink} />
            </div>
            <div className={[styles.sidebarBrandText, styles.mx3].join(' ')}>SB Admin <sup>2</sup></div>
        </span>
        
        {MenuItems.map((el, index) => 
            renderSwitch(el, index)
        )}
    </ul>);
}

export default Nav;