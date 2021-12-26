import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Ref } from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './headerMenuItem.module.scss';

function HeaderMenuItem() {
    interface InputProps {
        children: JSX.Element,
        onClick: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void)
    }
    
    const CustomToggle = React.forwardRef<HTMLInputElement, InputProps>((props, ref: Ref<any>) => (
        <span
            className={[styles.navLink, 'dropdown-toggle'].join(' ')}
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                props.onClick(e);
            } }
        >
            {props.children}
        </span>
    ));

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
        <li className={['dropdown no-arrow mx-1', styles.navItem].join(' ')}>
            <Dropdown className={styles.dropDownWrapper}>
                <Dropdown.Toggle as={CustomToggle}>
                    <span className={[styles.navLink, styles.navLinkIcon, 'dropdown-toggle'].join(' ')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className={[styles.badge, styles.badgeDanger, styles.badgeCounter].join(' ')}>7</span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item>item 1</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
    );
}

export default HeaderMenuItem;