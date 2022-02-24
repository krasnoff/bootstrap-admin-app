import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function Graph() {
    const d3Container = useRef(null);

    const hardcodedData = 
      [
        {
          date: new Date("1-May-12"),
          close: 58.13
        },
        {
          date: new Date("30-Apr-12"),
          close: 53.98
        },
        {
          date: new Date("27-Apr-12"),
          close: 67
        },
        {
          date: new Date("26-Apr-12"),
          close: 89.7
        },
        {
          date: new Date("25-Apr-12"),
          close: 99
        },
        {
          date: new Date("24-Apr-12"),
          close: 130.28
        },
        {
          date: new Date("23-Apr-12"),
          close: 166.7
        },
        {
          date: new Date("20-Apr-12"),
          close: 234.98
        },
        {
          date: new Date("19-Apr-12"),
          close: 345.44
        },
        {
          date: new Date("18-Apr-12"),
          close: 443.34
        },
        {
          date: new Date("17-Apr-12"),
          close: 543.7
        },
        {
          date: new Date("16-Apr-12"),
          close: 580.13
        },
        {
          date: new Date("13-Apr-12"),
          close: 605.23
        },
        {
          date: new Date("12-Apr-12"),
          close: 622.77
        },
        {
          date: new Date("11-Apr-12"),
          close: 626.2
        },
        {
          date: new Date("10-Apr-12"),
          close: 628.44
        },
        {
          date: new Date("9-Apr-12"),
          close: 636.23
        },
        {
          date: new Date("5-Apr-12"),
          close: 633.68
        },
        {
          date: new Date("4-Apr-12"),
          close: 624.31
        },
        {
          date: new Date("3-Apr-12"),
          close: 629.32
        },
        {
          date: new Date("2-Apr-12"),
          close: 618.63
        },
        {
          date: new Date("30-Mar-12"),
          close: 599.55
        },
        {
          date: new Date("29-Mar-12"),
          close: 609.86
        },
        {
          date: new Date("28-Mar-12"),
          close: 617.62
        },
        {
          date: new Date("27-Mar-12"),
          close: 614.48
        },
        {
          date: new Date("26-Mar-12"),
          close: 606.98
        }
       ]
    
    function buildGraph(data: Array<any>): void {
      const margin = {top: 30, right: 20, bottom: 30, left: 50},
      width = 600 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

      // Set the ranges
          
      const svg = d3.select(d3Container.current)
        .attr("width", width)
        .attr("height", height)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

      const dateArray = data.map(el => el.date);
      const valArray = data.map(el => el.close);

      console.log(valArray)
      console.log(Math.max(...valArray))

      const x = d3.scaleTime()
        .domain([dateArray[dateArray.length - 1], dateArray[0]])
        .range([0, width]);
      const y = d3.scaleLinear()
        .domain([0, Math.max(...valArray)])
        .range([ height, 0 ]);

      const	valueline = d3.line<any>()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        });

      const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      
      g.append("path")
        .attr("class", "y axis")
        .attr("d", valueline(hardcodedData));
    }

    useEffect(() => {
        buildGraph(hardcodedData);

        // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv").then(res => {
        //     console.log('data from csv', res);
        // })
    });
    
    return (<div className={styles.svg}>
        <svg className="container" ref={d3Container} width="600" height="270"></svg>
    </div>)
}

export default Graph;