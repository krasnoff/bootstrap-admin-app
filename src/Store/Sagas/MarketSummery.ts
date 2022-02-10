import { takeEvery, call, put } from "redux-saga/effects";
import { MarketSummaryResponse } from "../../Types/Store/MarketSummary";
import { API_ERRORED, GET_SERVER_DATA } from "../Action-Types";

export default function* watcherSaga() {
    yield takeEvery(GET_SERVER_DATA, workerSaga);
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
        yield put({ type: args.target, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getDataSaga(args: any): Promise<any> {
    const REACT_APP_SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
    return fetch(`${REACT_APP_SERVER_BASE_URL}${args.url}`, {
        headers: {
            'x-api-key': process.env.REACT_APP_API_KEY as string
        }
    }).then(response =>
        response.json()
    );
}