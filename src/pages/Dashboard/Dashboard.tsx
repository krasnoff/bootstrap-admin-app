import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { MarketSummaryResponse } from '../../Types/Store/MarketSummary';
import { getMarketSummery } from '../../Store/Actions/MarketSummery';
import { useEffect, useState } from 'react';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';
import { Table } from 'react-bootstrap';
import { Item } from '../../Types/Store/MarketSummary';

interface MyProps {
  getMarketSummery: any,
  marketSummaryResponse: MarketSummaryResponse
}

function DashBoard(outerProps: MyProps) {
    // const data = useSelector(state => state);
    const dispatch = useDispatch();
    const [results, setResults] = useState<Array<Item>>([])

    useEffect(() => {
      dispatch(outerProps.getMarketSummery()); 
    }, []);

    useEffect(() => {
      // console.log('data')
      if ((outerProps as any).marketSummaryResponse.MarketSummery.marketSummaryResponse.marketSummaryResponse) {
        setResults((outerProps as any).marketSummaryResponse.MarketSummery.marketSummaryResponse.marketSummaryResponse.result)
      }      
    }, [outerProps.marketSummaryResponse]);

    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Dashboard</h1>
        <ComponentWrapper title='Market Summery'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Exchange time zone </th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Regular market Price</th>
                <th>Regular market change</th>
              </tr>
            </thead>
            <tbody>
                {(results as Array<Item>).map((el, index) => 
                  <tr key={index}>
                    <td>{el.exchangeTimezoneName}</td>
                    <td>{el.shortName}</td>
                    <td>{el.symbol}</td>
                    <td>{el.regularMarketPrice.raw}</td>
                    <td>{el.regularMarketChange.raw}</td>
                  </tr>
                )}
            </tbody>
          </Table>
        </ComponentWrapper>
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
  