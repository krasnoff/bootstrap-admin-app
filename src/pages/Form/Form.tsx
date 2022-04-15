import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';


function FormComponent() {
    return (
        <div className={styles.containerFluid}>
            <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Form Component</h1>
            <ComponentWrapper title='Market Summary'>
                <div>here is my form</div>
            </ComponentWrapper>
        </div>
    );
  }
  
export default FormComponent;
  