import { MARKET_SUMMERY_DATA_LOADED } from "../Action-Types";
import initialState from "../state";

function MarketSummeryReducer(state = initialState, action: any) {
    if (action.type === MARKET_SUMMERY_DATA_LOADED) {
        return Object.assign({}, state, {
            marketSummaryResponse: state.marketSummaryResponse = action.payload
        });
    }

    return state;
}

export default MarketSummeryReducer;