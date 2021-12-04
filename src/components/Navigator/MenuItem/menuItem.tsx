import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }
    
    return (<li className={styles.navItem}>
        {props.mainMenuItem.url ? 
            <Link className={styles.navLink} to={'/' + props.mainMenuItem.url.toLowerCase()}>
                <FontAwesomeIcon icon={props.mainMenuItem.iconDefinition} className={styles.fontIcon} />
                <span>{props.mainMenuItem.title}</span>
            </Link>
        : null}
        {!props.mainMenuItem.url ? 
            <span className={styles.navLink} onClick={() => handleClick()}>
                <FontAwesomeIcon icon={props.mainMenuItem.iconDefinition} className={styles.fontIcon} />
                <span>{props.mainMenuItem.title}</span>
            </span>
        : null}
        {(props.mainMenuItem.subMenuItem) ? 
            <SubMenuItemObj subItems={props.mainMenuItem.subMenuItem} handleItemClick={props.handleItemClick} isExpand={expanded}></SubMenuItemObj>
        : null}
    </li>);
}

export default MenuItemObj;