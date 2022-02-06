export interface Rate {
    fmt: string,
    raw: number
}

export interface Item {
    exchange: string
    exchangeDataDelayedBy: number,
    exchangeTimezoneName: string,
    exchangeTimezoneShortName: string,
    firstTradeDateMilliseconds: number,
    fullExchangeName: string,
    gmtOffSetMilliseconds: number,
    language: string,
    market: string,
    marketState: string,
    priceHint: number,
    quoteSourceName: string,
    quoteType: string,
    region: string,
    regularMarketChange: Rate,
    regularMarketChangePercent: Rate,
    regularMarketPreviousClose: Rate,
    regularMarketPrice: Rate,
    regularMarketTime: Rate,
    shortName: string,
    sourceInterval: number,
    symbol: string,
    tradeable: boolean,
    triggerable: boolean
}

export interface MarketSummaryResponse {
    marketSummaryResponse: {
        error: any,
        result: Array<Item>
    }
}