import styles from './ComponentWrapper.module.scss';
import stylesMargins from '../../../css/margins.module.scss';
import stylesText from '../../../css/texts.module.scss';

interface MyProps {
    children: React.ReactNode,
    title: string
}

const AutoComplete = ( outerProps: MyProps ) => {
  return (
    <div className={[styles.card, styles.shadow, stylesMargins.mb4].join(' ')}>
      <div className={styles.header}>
        <h6 className={[stylesMargins.m0, stylesText.fontWeightBold, stylesText.primary].join(' ')}>{outerProps.title}</h6>
      </div>
      <div className={styles.body}>{outerProps.children}</div>
    </div>
  );
};
export default AutoComplete;