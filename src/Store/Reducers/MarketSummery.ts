import { GET_MARKET_SUMMARY } from "../Action-Types";
import initialState from "../state";

function MarketSummeryReducer(state = initialState, action: any) {
    if (action.type === GET_MARKET_SUMMARY) {
        return Object.assign({}, state, {
            d3Graph: state.marketSummaryResponse = action.payload
        });
    }

    return state;
}

export default MarketSummeryReducer;