import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';
import LifeCicle from './lifeCicle/lifeCicle';
import SampleUseContext from './sampleUseContext/sampleUseContext';
import OpenAI from './openAI/openAI';

function SubMenu3() {
    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Sub Menu 3</h1>
        <ComponentWrapper title='useEffect'>
            <LifeCicle></LifeCicle>
        </ComponentWrapper>
        <ComponentWrapper title='useContext'>
            <SampleUseContext></SampleUseContext>
        </ComponentWrapper>
        <ComponentWrapper title='openAI'>
            <OpenAI></OpenAI>
        </ComponentWrapper>
      </div>
    );
  }
  
export default SubMenu3;
  