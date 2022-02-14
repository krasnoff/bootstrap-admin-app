import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuoteSummery } from '../../Store/Actions/QuoteSummary';
import { connect, useDispatch } from 'react-redux';
import { QuoteSummaryResponse } from '../../Types/Store/QuoteSummery';
import { getErrorSummery } from '../../Store/Actions/ErrorSummary';

interface MyProps {
  getQuoteSummery?: any,
  getErrorSummery?: any,
  quoteSummaryResponse?: any
}

function CompanyReview(outerProps: MyProps) {
    let searchParams = useParams();
    let [companySymbol, setCompanySymbol] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        let user = searchParams['companySymbol']
        if (user) {
            setCompanySymbol(user);
            if (user && user !== '') {
              dispatch(outerProps.getQuoteSummery(user)); 
            }
        }
        
    }, [searchParams]);

    useEffect(() => {
      // if (outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse) {
      //   const response = outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse.quoteSummary;
      //   console.log('response', response);

      //   if (response.error) {
      //     console.log('response error', response.error);
      //     // dispatch(outerProps.getErrorSummery(response.error.description)); 
      //   } else {
      //     console.log('response result', response.result);
      //   }
      // }
      
    }, []);

    useEffect(() => {
      if (outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary.error) {
        const response = outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse.quoteSummary;
        console.log('response', response);
        dispatch(outerProps.getErrorSummery(response.error.description)); 
      }
    }, [outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary]);
   
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
    getQuoteSummery: (symbol: string, queryString: string) => getQuoteSummery(symbol, 'lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile'),
    getErrorSummery: (errorMessage: string) => getErrorSummery(errorMessage)
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CompanyReview);
  