import { Rate } from './Rate';
import { ResponseObj } from './ResponseObj';

export interface DefaultKeyStatistics {
    '52WeekChange': Rate,
    SandP52WeekChange: Rate,
    annualHoldingsTurnover: Rate,
    annualReportExpenseRatio: Rate,
    beta: Rate,
    beta3Year: Rate,
    bookValue: Rate,
    category: Rate,
    dateShortInterest: Rate,
    earningsQuarterlyGrowth: Rate,
    enterpriseToEbitda: Rate,
    enterpriseToRevenue: Rate,
    enterpriseValue: Rate,
    fiveYearAverageReturn: Rate,
    floatShares: Rate,
    forwardEps: Rate,
    forwardPE: Rate,
    fundFamily: Rate | null,
    fundInceptionDate: Rate,
    heldPercentInsiders: Rate,
    heldPercentInstitutions: Rate,
    lastCapGain: Rate,
    lastDividendValue: Rate,
    lastFiscalYearEnd: Rate,
    lastSplitDate: Rate,
    lastSplitFactor: string,
    legalType: Rate | null,
    maxAge: number,
    morningStarOverallRating: Rate,
    morningStarRiskRating: Rate,
    mostRecentQuarter: Rate,
    netIncomeToCommon: Rate,
    nextFiscalYearEnd: Rate,
    pegRatio: Rate,
    priceHint: Rate,
    priceToBook: Rate,
    priceToSalesTrailing12Months: Rate,
    profitMargins: Rate,
    revenueQuarterlyGrowth: Rate,
    sharesOutstanding: Rate,
    sharesPercentSharesOut: Rate,
    sharesShort: Rate,
    sharesShortPreviousMonthDate: Rate,
    sharesShortPriorMonth: Rate,
    shortPercentOfFloat: Rate,
    shortRatio: Rate,
    threeYearAverageReturn: Rate,
    totalAssets: Rate,
    trailingEps: Rate,
    yield: Rate,
    ytdReturn: Rate
}

export interface CompanyOfficer {
    age: number,
    exercisedValue: Rate,
    fiscalYear: number,
    maxAge: number,
    name: number,
    title: number,
    totalPay: Rate,
    unexercisedValue: Rate,
    yearBorn: number
}

export interface AssetProfile {
    address1: string,
    auditRisk: number,
    boardRisk: number,
    city: string,
    companyOfficers: Array<CompanyOfficer>,
    compensationAsOfEpochDate: Date,
    compensationRisk: number,
    country: string,
    fullTimeEmployees: string,
    governanceEpochDate: Date,
    industry: string,
    longBusinessSummary: string,
    maxAge: string,
    overallRisk: 1,
    phone: string,
    sector: string,
    shareHolderRightsRisk: number,
    state: string,
    website: string,
    zip: string
}

export interface QuoteSummaryResponse extends ResponseObj {
    result: Array<{
        assetProfile: AssetProfile
    }>
}