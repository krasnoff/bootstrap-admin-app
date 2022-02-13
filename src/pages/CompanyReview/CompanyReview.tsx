import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuoteSummery } from '../../Store/Actions/QuoteSummary';
import { connect, useDispatch } from 'react-redux';
import { QuoteSummaryResponse } from '../../Types/Store/QuoteSummery';

interface MyProps {
  getQuoteSummery?: any,
  quoteSummeryResponse?: QuoteSummaryResponse
}

function CompanyReview(outerProps: MyProps) {
    let searchParams = useParams();
    let [companySymbol, setCompanySymbol] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        let user = searchParams['companySymbol']
        if (user) {
            setCompanySymbol(user);
            if (companySymbol && companySymbol !== '') {
              dispatch(outerProps.getQuoteSummery(companySymbol)); 
            }
        }
        
    }, [companySymbol]);

        
    
    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Company Review</h1>
        {companySymbol}
      </div>
    );
}

const mapStateToProps = (state: QuoteSummaryResponse) => {
  return {
    quoteSummaryResponse: state
  }
}

const mapDispatchToProps = () => {
  return {
    getQuoteSummery: (symbol: string, queryString: string) => getQuoteSummery(symbol, 'lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile')
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CompanyReview);
  