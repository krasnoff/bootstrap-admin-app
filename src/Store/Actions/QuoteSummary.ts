import { GET_QOUTE_SUMMERY_DATA, QOUTE_SUMMERY_DATA_LOADED } from "../Action-Types";

export function getQuoteSummery(symbol: string, querystring: string) {
    return { type: GET_QOUTE_SUMMERY_DATA, url: `/v11/finance/quoteSummary/${symbol}`, target: QOUTE_SUMMERY_DATA_LOADED, querystring: querystring };
}