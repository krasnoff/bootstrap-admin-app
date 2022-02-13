import { MarketSummaryResponse } from '../../src/Types/Store/MarketSummary';

const initialState: any = {
    marketSummaryResponse: {
        error: null,
        result: []
    },
    quoteSummary: {
        error: null,
        result: []
    },
    error: {
        error: null
    }
};

export default initialState;