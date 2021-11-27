import styles from './subMenu.module.scss'; // Import css modules stylesheet as styles
import SubMenuItem from '../../../Types/Navigator/SubMenuItem';
import { Link } from 'react-router-dom';
import { SingleItem } from '../../../Types/Navigator/SingleItem';

interface MyProps {
    subItems: SubMenuItem,
    handleItemClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>, el: SingleItem) => void)
}

function SubMenuItemObj(props: MyProps): JSX.Element {
    return (
        <div id="collapseTwo" className={styles.collapse} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className={styles.collapseInner}>
                <h6 className={styles.collapseHeader}>{props.subItems.title}:</h6>
                {props.subItems.items.map((el, index) => 
                    <Link onClick={(event: any) => props.handleItemClick(event, el)} className={styles.collapseItem} to={'/' + el.url.toLowerCase()} key={'i' + index.toString()}>{el.title}</Link>
                )}
            </div>
        </div>
    );
}

export default SubMenuItemObj;
