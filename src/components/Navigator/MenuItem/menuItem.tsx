import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenuItem from '../../../Types/Navigator/MainMenuItem';
import { SingleItem } from '../../../Types/Navigator/SingleItem';
import SubMenuItem from '../../../Types/Navigator/SubMenuItem';
import SubMenuItemObj from '../Submenu/subMenu';
import styles from './menuItem.module.scss'; // Import css modules stylesheet as styles

interface MyProps {
    handleItemClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>, el: SingleItem) => void),
    mainMenuItem: MainMenuItem
}

function MenuItemObj(props: MyProps): JSX.Element {
    return (<li className={styles.navItem}>
        <a className={styles.navLink}>
            <FontAwesomeIcon icon={props.mainMenuItem.iconDefinition} className={styles.fontIcon} />
            <span>{props.mainMenuItem.title}</span></a>
        {props.mainMenuItem.subMenuItem ? 
            <SubMenuItemObj subItems={props.mainMenuItem.subMenuItem} handleItemClick={props.handleItemClick}></SubMenuItemObj>
        : null}
    </li>);
}

export default MenuItemObj;