import { ChartSummaryGraphFormatObj } from "../Types/Store/ChartSummaryGraphFormat";
import { ChartSummaryGraphParameters } from "../Types/Store/ChartSummaryGraphParameters";
import { Chart, Result } from "../Types/Store/ChartSummery";

export function useFormatChartData() {
    
    const buildChartSummary = (arg: ChartSummaryGraphParameters, chartObj: any) => {
        let res: Array<ChartSummaryGraphFormatObj> = [];
        

        if(chartObj) {
            let valuesArray: Array<number> = []
            
            if (arg === ChartSummaryGraphParameters.Adjclose) {
                valuesArray = chartObj.indicators.adjclose[0].adjclose;
            } else {
                valuesArray = chartObj.indicators.quote[0][arg];
            }
    
            for (let i= 0; i < chartObj.timestamp.length; i++) {
                res.push({
                    date: new Date(chartObj.timestamp[i] * 1000),
                    value: valuesArray[i]
                });
            }
        }

        return res;
    }
    
    
    
    const formatChartSummary = (chartObj: any, parameters: ChartSummaryGraphParameters) => {
        let res: Array<ChartSummaryGraphFormatObj> = [];
        
        if (chartObj.chart && chartObj.chart.result.length > 0) {
            switch(parameters) {
                case ChartSummaryGraphParameters.Adjclose:
                    res = buildChartSummary(ChartSummaryGraphParameters.Adjclose, chartObj.chart.result[0]);
                    break;
                case ChartSummaryGraphParameters.Close:
                    res = buildChartSummary(ChartSummaryGraphParameters.Close, chartObj.chart.result[0]);
                    break;
                case ChartSummaryGraphParameters.High:
                    res = buildChartSummary(ChartSummaryGraphParameters.High, chartObj.chart.result[0]);
                    break;
                case ChartSummaryGraphParameters.Low:
                    res = buildChartSummary(ChartSummaryGraphParameters.Low, chartObj.chart.result[0]);
                    break;
                case ChartSummaryGraphParameters.Open:
                    res = buildChartSummary(ChartSummaryGraphParameters.Open, chartObj.chart.result[0]);
                    break;
                case ChartSummaryGraphParameters.Volume:
                    res = buildChartSummary(ChartSummaryGraphParameters.Volume, chartObj.chart.result[0]);
                    break;
            }
        }

        return res;
    }

    return formatChartSummary;
}