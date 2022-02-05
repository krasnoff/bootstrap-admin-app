import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CompanyReview() {
    let searchParams = useParams();
    let [companySymbol, setCompanySymbol] = useState('');

    useEffect(() => {
        let user = searchParams['companySymbol']
        if (user) {
            setCompanySymbol(user);
        }
        
    }, [companySymbol]);
    
    
    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Company Review</h1>
        {companySymbol}
      </div>
    );
  }
  
export default CompanyReview;
  