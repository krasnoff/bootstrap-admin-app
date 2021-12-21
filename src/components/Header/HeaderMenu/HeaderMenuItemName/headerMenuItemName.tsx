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
              className={[props.className, styles.submenuItems].join(' ')}
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
                    <span className={[styles.mr2, styles.small, 'd-none d-lg-inline text-gray-600'].join(' ')}>Douglas McGee</span>
                    <img className={[styles.imgProfile, 'rounded-circle'].join(' ')} src="img/undraw_profile.svg" />
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Settings</Dropdown.Item>
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Activity Log</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={(event: any) => handleItemClick(event)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    )
}

export default HeaderMenuItemName;