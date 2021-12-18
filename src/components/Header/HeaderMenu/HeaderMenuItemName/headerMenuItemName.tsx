import React, { Ref } from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './headerMenuItemName.module.scss';

function HeaderMenuItemName() {
    const handleItemClick = (evt: any) => {
        console.log('item click...', evt);
        console.log('item click value...', evt.target.innerHTML);
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
    
    return (
        <li className={[styles.navItem, 'dropdown no-arrow'].join(' ')}>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
                    <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>Douglas McGee</span>
                    <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src="img/undraw_profile.svg" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Action</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Another action</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    )
}

export default HeaderMenuItemName;