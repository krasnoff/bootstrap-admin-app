import styles from './headerMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem';
import HeaderMenuItemObj from '../../../Types/Header/HeaderMenuItem';
import HeaderMenuItemName from './HeaderMenuItemName/headerMenuItemName';
import { faBell, faDonate, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import AlertComponent from './HeaderMenuItem/AlertComponent/AlertComponent';
import MessagesComponent from './HeaderMenuItem/MessagesComponent/MessagesComponent';

function HeaderMenu() {


    const headerMenuItems: Array<HeaderMenuItemObj> = [{
        iconDefinition: faBell,
        numberOfMessages: 2,
        title: 'Alerts center',
        bottomText: 'show all alerts',
        bottomTextUrl: '/somthing',
        subMenuItems: [<AlertComponent properties={{
            createDate: new Date(),
            title: 'title 1',
            alreadeyRead: false,
            iconBackgroundColor: '#ff0000',
            iconDefinition: faFileAlt,
            id: '4443324324'
        }} />, <AlertComponent properties={{
            createDate: new Date(),
            title: 'title 2',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            iconDefinition: faDonate,
            id: '4443324324'
        }} />]
    },{
        iconDefinition: faEnvelope,
        numberOfMessages: 4,
        title: 'messages center',
        bottomText: 'show all alerts',
        bottomTextUrl: '/somthing',
        subMenuItems: [<MessagesComponent properties={{
            createDate: new Date(),
            title: 'title 1',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'ddd',
            id: '4443324324'
        }} />, <MessagesComponent properties={{
            createDate: new Date(),
            title: 'title 1',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'ddd',
            id: '4443324324'
        }} />, <MessagesComponent properties={{
            createDate: new Date(),
            title: 'title 1',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'ddd',
            id: '4443324324'
        }} />]
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