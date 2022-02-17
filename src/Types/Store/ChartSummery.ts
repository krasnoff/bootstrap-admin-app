import { ResponseObj } from "./ResponseObj";

export interface Quote {
    low: Array<number>,
    high: Array<number>,
    open: Array<number>,
    close: Array<number>,
    volume: Array<number>,
}

export interface Adjclose {
    adjclose: Array<number>
}

export interface Indicators {
    quote: Array<Quote>,
    adjclose: Adjclose
}

export interface comparisonsElement {
    symbol: string,
    high: Array<number>,
    low: Array<number>,
    chartPreviousClose: number,
    close: Array<number>,
    open: Array<number>
}

export interface TimePeriod {
    timezone: string,
    tart: number,
    end: number,
    gmtoffset: number
}

export interface Meta {
    meta: {
        currency: string,
        symbol: string,
        exchangeName: string,
        instrumentType: string,
        firstTradeDate: number,
        regularMarketTime: number,
        gmtoffset: number,
        timezone: string,
        exchangeTimezoneName: string,
        regularMarketPrice: number,
        chartPreviousClose: number,
        priceHint: number,
        currentTradingPeriod: {
          pre: TimePeriod,
          regular: TimePeriod,
          post: TimePeriod
        },
        dataGranularity: string,
        range: string,
        validRanges: Array<string>
    },
}

export interface Result {
    meta: Meta,
    timestamp: Array<number>,
    comparisons: Array<comparisonsElement>,
    indicators: Indicators
}

export interface Chart extends ResponseObj {
    result: Array<Result>
}