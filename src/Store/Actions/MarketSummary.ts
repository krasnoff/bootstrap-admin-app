import { GET_SERVER_DATA, MARKET_SUMMERY_DATA_LOADED } from "../Action-Types";

export function getMarketSummery() {
    return { type: GET_SERVER_DATA, url: '/v6/finance/quote/marketSummary', target: MARKET_SUMMERY_DATA_LOADED };
}