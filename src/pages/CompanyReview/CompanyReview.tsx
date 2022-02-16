import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getQuoteSummery } from '../../Store/Actions/QuoteSummary';
import { connect, useDispatch } from 'react-redux';
import { QuoteSummaryResponse } from '../../Types/Store/QuoteSummery';
import { getErrorSummery } from '../../Store/Actions/ErrorSummary';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';
import GeneralProfile from './GeneralProfile/GeneralProfile';

interface MyProps {
  getQuoteSummery?: any,
  getErrorSummery?: any,
  quoteSummaryResponse?: any
}

function CompanyReview(outerProps: MyProps) {
    let searchParams = useParams();
    const dispatch = useDispatch();

    const previousErrorDescriptionRef = useRef(outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary?.error?.description);

    // dispatch data
    useEffect(() => {
        let user = searchParams['companySymbol']
        if (user) {
            if (user && user !== '') {
              dispatch(outerProps.getQuoteSummery(user)); 
            }
        }
        
    }, [searchParams]);

    // get results data
    useEffect(() => {
      if (outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary.result) {
        console.log('quoteSummary...', outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary)
      }

      
    }, [outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary]);

    // get erro data
    useEffect(() => {
      if (outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary.error) {
        const response = outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse.quoteSummary;

        if (response.error && previousErrorDescriptionRef.current !== response.error.description) {
          dispatch(outerProps.getErrorSummery(response.error.description)); 
          previousErrorDescriptionRef.current = response.error.description;
        }
      }
    }, [outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary]);

    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Company Review</h1>
        <ComponentWrapper title='General Data'>
          <GeneralProfile assetProfile={outerProps.quoteSummaryResponse.QuoteSummary.quoteSummeryResponse?.quoteSummary.result[0].assetProfile}></GeneralProfile>
        </ComponentWrapper>
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
    getQuoteSummery: (symbol: string, queryString: string) => getQuoteSummery(symbol, 'lang=en&region=US&modules=assetProfile'),
    getErrorSummery: (errorMessage: string) => getErrorSummery(errorMessage)
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CompanyReview);
  