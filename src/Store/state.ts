import { MarketSummaryResponse } from '../../src/Types/Store/MarketSummary';

const initialState: MarketSummaryResponse = {
    marketSummaryResponse: {
        error: null,
        result: []
    }    
};

export default initialState;