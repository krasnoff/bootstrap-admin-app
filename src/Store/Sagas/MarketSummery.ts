import { takeEvery, call, put } from "redux-saga/effects";
import { MarketSummaryResponse } from "../../Types/Store/MarketSummary";
import { API_ERRORED, GET_MARKET_SUMMARY, MARKET_SUMMERY_DATA_LOADED } from "../Action-Types";

export default function* watcherSaga() {
    yield takeEvery(GET_MARKET_SUMMARY, workerSaga);
}

/**
 * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 * @param {*} args 
 */
function* workerSaga(args: any): any {
    try {
        const payload = yield call(getDataSaga, args);
        yield put({ type: MARKET_SUMMERY_DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getDataSaga(args: any): Promise<MarketSummaryResponse> {
    return fetch("https://yfapi.net/v6/finance/quote/marketSummary", {
        headers: {
            'x-api-key': 'KhgDfpdyUt2wtkWRmkN86aOQFbCbvvbk9jH92MGb'
        }
    }).then(response =>
        response.json()
    );
}