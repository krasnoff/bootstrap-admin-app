import MessagesComponentsProps from '../../../../../Types/Header/MessagesComponentsProps';
import styles from './MessagesComponent.module.scss';
import styleText from '../../../../../css/texts.module.scss'
import styleIndicators from '../../../../../css/Indicators.module.scss'
import { Indicator } from '../../../../../Types/Header/IndicatorEnum';

interface MyProps {
    properties: MessagesComponentsProps
}

function MessagesComponent(outerProps: MyProps) {

    let indicator;

    switch (outerProps.properties.indicator) {
        case Indicator.Success:
            indicator = styleIndicators.bgSuccess;
            break;
        case Indicator.Danger:
            indicator = styleIndicators.bgDanger;
            break;
        case Indicator.Info:
            indicator = styleIndicators.bgInfo;
            break;
        case Indicator.Warning:
            indicator = styleIndicators.bgWarning;
            break;
    }

    return (
        <div className={[styles.dropDownItem, 'd-flex align-items-center'].join(' ')}>
            <div className={[styles.dropdownListImage, ' mr-3'].join(' ')}>
                <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                <div className={[styles.statusIndicator, indicator].join(' ')}></div>
            </div>
            <div className="font-weight-bold">
                <div className={[styleText.textTruncate, styles.textTruncate].join(' ')}>Hi there! I am wondering if you can help me with a
                    problem I've been having.</div>
                <div className={[styleText.small, styleText.textGray500].join(' ')}>Emily Fowler · 58m</div>
            </div>
        </div>
    );
}

export default MessagesComponent;