import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import { connect, useDispatch } from 'react-redux';
import { MarketSummaryResponse } from '../../Types/Store/MarketSummary';
import { getMarketSummery } from '../../Store/Actions/MarketSummary';
import { useEffect, useState } from 'react';
import ComponentWrapper from '../../components/General/ComponentWrapper/ComponentWrapper';
import { Table } from 'react-bootstrap';
import { Item } from '../../Types/Store/MarketSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
      if ((outerProps as any).marketSummaryResponse.MarketSummery.marketSummaryResponse.marketSummaryResponse) {
        setResults((outerProps as any).marketSummaryResponse.MarketSummery.marketSummaryResponse.marketSummaryResponse.result);
      }      
    }, [outerProps.marketSummaryResponse]);

    const formatPrice = (price: number): string => {
      return price.toLocaleString();
    }

    return (
      <div className={styles.containerFluid}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Dashboard</h1>
        <ComponentWrapper title='Market Summary'>
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
                    <td>{formatPrice(el.regularMarketPrice.raw)}</td>
                    <td className={el.regularMarketChangePercent.raw < 0 ? styles.red : styles.green}>
                      <div className={styles.arrowFramework}>
                        <div>{formatPrice(el.regularMarketChangePercent.raw * 100)}%</div>
                        <div>
                          {el.regularMarketChangePercent.raw < 0 ? 
                          <FontAwesomeIcon icon={faArrowDown} /> :
                          <FontAwesomeIcon icon={faArrowUp} />}    
                        </div>
                      </div>                  
                    </td>
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
    getMarketSummery: () => getMarketSummery()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
  