import styles from './headerMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem';
import HeaderMenuItemObj from '../../../Types/Header/HeaderMenuItem';
import HeaderMenuItemName from './HeaderMenuItemName/headerMenuItemName';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeaderMenu() {
    const headerMenuItems: Array<HeaderMenuItemObj> = [{
        iconDefinition: faBell,
        numberOfMessages: 2,
        title: 'Alerts center',
        bottomText: 'show all alerts',
        bottomTextUrl: '/somthing',
        subMenuItems: ['one', 'two']
    },{
        iconDefinition: faEnvelope,
        numberOfMessages: 4,
        title: 'messages center',
        bottomText: 'show all alerts',
        bottomTextUrl: '/somthing',
        subMenuItems: ['uno', 'dos', 'tres']
    }];
    
    return (
        <ul className={styles.navbarNav}>
            {headerMenuItems.map((el, index) => 
                <HeaderMenuItem properties={el} key={index}></HeaderMenuItem>
            )}
            
            <div className={[styles.topbarDivider, 'd-none d-sm-block'].join(' ')}></div>
            <HeaderMenuItemName></HeaderMenuItemName>
        </ul>
    );
}

export default HeaderMenu;