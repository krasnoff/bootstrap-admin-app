import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';

function SubMenu1Lazy() {
    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Sub Menu 1</h1>
      </div>
    );
  }
  
export default SubMenu1Lazy;
  