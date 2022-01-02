import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Ref } from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './headerMenuItem.module.scss';
import stylesText from '../../../../css/texts.module.scss';
import stylesShadows from '../../../../css/shadows.module.scss';
import HeaderMenuItemObj from '../../../../Types/Header/HeaderMenuItem';

interface MyProps {
  properties: HeaderMenuItemObj
}

function HeaderMenuItem(outerProps: MyProps) {
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
              className={[props.className, styles.submenuItems, stylesShadows.shadow, styles.customDropDown].join(' ')}
              aria-labelledby={props['aria-labelledby']}
            >
              <h6 className={styles.dropdownHeader}>{outerProps.properties.title}</h6>
              <ul className={[styles.dropDownItemList].join(' ')}>
                {React.Children.toArray(props.children).filter(
                  (child: any) =>
                    'child.props.children',
                )}
              </ul>
              <span className={['dropdown-item text-center', stylesText.small, stylesText.textGray500, styles.dropDownFooter].join(' ')}>{outerProps.properties.bottomText}</span>
            </div>
          );
        },
      );
    
    return (
        <li className={['dropdown no-arrow mx-1', styles.navItem].join(' ')}>
            <Dropdown className={styles.dropDownWrapper}>
                <Dropdown.Toggle as={CustomToggle}>
                    <span className={[styles.navLink, styles.navLinkIcon, 'dropdown-toggle'].join(' ')}>
                        <FontAwesomeIcon icon={outerProps.properties.iconDefinition} />
                        <span className={[styles.badge, styles.badgeDanger, styles.badgeCounter].join(' ')}>{outerProps.properties.numberOfMessages}</span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  {outerProps.properties.subMenuItems.map((el, index) => 
                    <Dropdown.Item bsPrefix={styles.customDropDown} key={index}>{el}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
            </Dropdown>
        </li>
    );
}

export default HeaderMenuItem;