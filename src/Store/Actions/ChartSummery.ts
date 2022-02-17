import { GET_CHART_DATA, CHART_DATA_LOADED } from "../Action-Types";

export function getChart(symbol: string, querystring: string) {
    return { type: GET_CHART_DATA, url: `/v8/finance/chart/${symbol}`, target: CHART_DATA_LOADED, querystring: querystring };
}