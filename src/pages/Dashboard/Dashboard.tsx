import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { MarketSummaryResponse } from '../../Types/Store/MarketSummary';
import { getMarketSummery } from '../../Store/Actions/MarketSummery';
import { useEffect } from 'react';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';

interface MyProps {
  getMarketSummery: any,
  marketSummaryResponse: MarketSummaryResponse
}

function DashBoard(outerProps: MyProps) {
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(outerProps.getMarketSummery()); 
    }, []);

    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Dashboard</h1>
        {/* {JSON.stringify(data)} */}
        <ComponentWrapper title='Market Summery'>dfgdfgdfgdfg</ComponentWrapper>
      </div>
    );
  }
  
const mapStateToProps = (state: MarketSummaryResponse) => {
  return {
    marketSummaryResponse: state
  }
}

const mapDispatchToProps = () => {
  return {
    getMarketSummery: (args: any) => getMarketSummery()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
  