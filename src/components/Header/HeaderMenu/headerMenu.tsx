import styles from './headerMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItem/HeaderMenuItem';
import HeaderMenuItemObj from '../../../Types/Header/HeaderMenuItem';
import HeaderMenuItemName from './HeaderMenuItemName/headerMenuItemName';
import { faBell, faDonate, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import AlertComponent from './HeaderMenuItem/AlertComponent/AlertComponent';
import MessagesComponent from './HeaderMenuItem/MessagesComponent/MessagesComponent';
import { Indicator } from '../../../Types/Header/IndicatorEnum';

function HeaderMenu() {


    const headerMenuItems: Array<HeaderMenuItemObj> = [{
        iconDefinition: faBell,
        numberOfMessages: 2,
        title: 'Alerts center',
        bottomText: 'show all alerts',
        bottomTextUrl: '/somthing',
        subMenuItems: [<AlertComponent properties={{
            createDate: new Date(2022, 0, 12),
            title: 'title 1',
            alreadeyRead: false,
            iconBackgroundColor: '#ff0000',
            iconDefinition: faFileAlt,
            id: '4443324324'
        }} />, <AlertComponent properties={{
            createDate: new Date(2021, 0, 11),
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
            createDate: new Date(2022, 0, 12),
            title: 'Hi there! I am wondering if you can help me with a problem I\'ve been having.',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'undraw_profile_1.svg',
            id: '4443324324',
            indicator: Indicator.Success,
            fullName: 'Kobi Krasnoff'
        }} />, <MessagesComponent properties={{
            createDate: new Date(2021, 0, 11),
            title: 'I have the photos that you ordered last month, how would you like them sent to you?',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'undraw_profile_2.svg',
            id: '4443324324',
            indicator: Indicator.Info,
            fullName: 'Itsik Buzu'
        }} />, <MessagesComponent properties={{
            createDate: new Date(2022, 0, 16, 10, 0, 0),
            title: 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!',
            alreadeyRead: false,
            iconBackgroundColor: '#ffff00',
            picUrl: 'undraw_profile_3.svg',
            id: '4443324324',
            indicator: Indicator.Warning,
            fullName: 'Toto Coala'
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