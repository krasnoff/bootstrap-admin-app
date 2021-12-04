import MainMenuItem from '../../../Types/Navigator/MainMenuItem';
import styles from './subHeader.module.scss';

interface MyProps {
    mainMenuItem: MainMenuItem
}

function SubHeader(props: MyProps) {
    return <div className={styles.sidebarHeading}>{props.mainMenuItem.title}</div>
}

export default SubHeader;