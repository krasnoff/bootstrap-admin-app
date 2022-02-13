import { MarketSummaryResponse } from '../../src/Types/Store/MarketSummary';

const initialState: any = {
    marketSummaryResponse: {
        error: null,
        result: []
    },
    quoteSummary: {
        error: null,
        result: []
    }
};

export default initialState;