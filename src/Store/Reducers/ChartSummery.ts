import { CHART_DATA_LOADED } from "../Action-Types";
import initialState from "../state";

function ChartReducer(state = initialState, action: any) {
    if (action.type === CHART_DATA_LOADED) {
        return Object.assign({}, state, {
            chartSummary: state.chartSummary = action.payload
        });
    }

    return state;
}

export default ChartReducer;