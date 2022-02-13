import { QOUTE_SUMMERY_DATA_LOADED } from "../Action-Types";
import initialState from "../state";

function QuoteSummeryReducer(state = initialState, action: any) {
    if (action.type === QOUTE_SUMMERY_DATA_LOADED) {
        return Object.assign({}, state, {
            quoteSummeryResponse: state.quoteSummary = action.payload
        });
    }

    return state;
}

export default QuoteSummeryReducer;