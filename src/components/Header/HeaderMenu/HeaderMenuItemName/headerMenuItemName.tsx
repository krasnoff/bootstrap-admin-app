import { faCogs, faList, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Ref, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import UserDetails from '../../../../Types/Header/UserDetails';
import styles from './headerMenuItemName.module.scss';

function HeaderMenuItemName() {
    const [userDetails, setUserDetails] = useState<UserDetails>({
        firstName: '',
        lastName: '',
        picUrl: '',
        id: ''
    });
    
    useEffect(() => {
        setUserDetails({
            firstName: 'Kobi',
            lastName: 'Krasnoff',
            picUrl: 'undraw_profile.svg',
            id: '4444333'
        });
    }, []);
    
    const handleItemClick = (evt: any) => {
        console.log('item click...', evt);
        console.log('item click value...', evt.target.dataset);
    }

    interface InputProps {
        children: JSX.Element,
        onClick: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void)
    }

    const CustomToggle = React.forwardRef<HTMLInputElement, InputProps>((props, ref: Ref<any>) => {
        return (
            <span
                className={[styles.navLink, 'dropdown-toggle'].join(' ')}
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick(e);
                }}
            >
                {props.children}
            </span>
        );
    });

    interface MenuProps {
        children: JSX.Element,
        style: React.CSSProperties | undefined,
        className: string | undefined,
        'aria-labelledby': string | undefined
    }
    
    const CustomMenu = React.forwardRef<HTMLInputElement, MenuProps>(
        (props, ref: Ref<any>) => {
          
          return (
            <div
              ref={ref}
              style={props.style}
              className={[props.className, styles.submenuItems, styles.shadow, styles.customDropDown].join(' ')}
              aria-labelledby={props['aria-labelledby']}
            >
              <ul className="list-unstyled">
                {React.Children.toArray(props.children).filter(
                  (child: any) =>
                    'child.props.children',
                )}
              </ul>
            </div>
          );
        },
      );
    
    return (
        <li className={[styles.navItem, 'dropdown no-arrow'].join(' ')}>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
                    <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>{userDetails.firstName} {userDetails.lastName}</span>
                    <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src={'img/' + userDetails.picUrl} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)} data-id="Profile" data-url="/Profile"><FontAwesomeIcon icon={faUser} className={styles.menuIcon} /> Profile</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)} data-id="Settings" data-url="/Settings"><FontAwesomeIcon icon={faCogs} className={styles.menuIcon} /> Settings</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)} data-id="Activity Log" data-url="/Activity Log"><FontAwesomeIcon icon={faList} className={styles.menuIcon} /> Activity Log</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)} data-id="Logout" data-url="/Logout"><FontAwesomeIcon icon={faSignOutAlt} className={styles.menuIcon} /> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    )
}

export default HeaderMenuItemName;