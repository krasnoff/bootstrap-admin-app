import AlertComponentsProps from '../../../../../Types/Header/AlertComponentsProps';
import styles from './AlertComponent.module.scss';
import styleMargins from '../../../../../css/margins.module.scss'
import styleTexts from '../../../../../css/texts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MyProps {
    properties: AlertComponentsProps
}

function AlertComponent(outerProps: MyProps) {
    const stylesColor = {
        bgColor: {
            backgroundColor: outerProps.properties.iconBackgroundColor
        }
    };

    return (
        <div className={[styles.dropDownItem, ' d-flex align-items-center'].join(' ')}>
            <div className={styleMargins.mr3}>
                <div className={[styles.iconCircle].join(' ')} style={stylesColor.bgColor}>
                    <FontAwesomeIcon icon={outerProps.properties.iconDefinition} className={styles.fontIcon} />
                </div>
            </div>
            <div>
                <div className={[styleTexts.small, styleTexts.textGray500].join(' ')}>{outerProps.properties.createDate.toDateString()}</div>
                <span className={outerProps.properties.alreadeyRead ? '' : styleTexts.fontWeightBold}>{outerProps.properties.title}</span>
            </div>
        </div>
    );
}

export default AlertComponent;