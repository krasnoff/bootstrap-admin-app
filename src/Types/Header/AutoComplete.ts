interface Item {
    exch: string,
    exchDisp: string,
    name: string,
    symbol: string,
    type: string,
    typeDisp: string
}

interface ResultSet {
    Query: string,
    Result: Array<Item>
}

export default interface AutoComplete {
    ResultSet: ResultSet
}