import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getQuoteSummery } from '../../Store/Actions/QuoteSummary';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorSummery } from '../../Store/Actions/ErrorSummary';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';
import GeneralProfile from './GeneralProfile/GeneralProfile';

function CompanyReview() {
    const data = useSelector(state => state);
    let searchParams = useParams();
    const dispatch = useDispatch();

    const previousErrorDescriptionRef = useRef((data as any).QuoteSummary.quoteSummeryResponse?.quoteSummary?.error?.description);

    // dispatch data
    useEffect(() => {
        let user = searchParams['companySymbol']
        if (user) {
            if (user && user !== '') {
              dispatch(getQuoteSummery(user, 'lang=en&region=US&modules=assetProfile%2CquoteType')); 
            }
        }
    }, [searchParams, dispatch]);

    // get error data
    useEffect(() => {
      
      if ((data as any).QuoteSummary.quoteSummeryResponse?.quoteSummary.error) {
        const response = (data as any).QuoteSummary.quoteSummeryResponse.quoteSummary;
        
        if (response.error && previousErrorDescriptionRef.current !== response.error.description) {
          dispatch(getErrorSummery(response.error.description)); 
          previousErrorDescriptionRef.current = response.error.description;
        }
      }
    }, [data, dispatch]);  

    return (
      <>
        {(data as any).QuoteSummary && (data as any).QuoteSummary.quoteSummeryResponse?.quoteSummary.result ? 
        <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Company Review</h1>
        <ComponentWrapper title='General Data'>
          <GeneralProfile 
            assetProfile={(data as any).QuoteSummary.quoteSummeryResponse?.quoteSummary.result[0].assetProfile}
            quoteType={(data as any).QuoteSummary.quoteSummeryResponse?.quoteSummary.result[0].quoteType}
          ></GeneralProfile>
        </ComponentWrapper>
        </div>
        : null }
      </>
    );
}

export default CompanyReview;
  