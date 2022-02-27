import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useCallback, useEffect, useMemo, useRef } from 'react';

function Graph() {
    const d3Container = useRef(null);
    const wrapperDiv = useRef<HTMLDivElement>(null);

    const hardcodedData = useMemo(() =>
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
    ], []);
    
    const handleBuildGraph = useCallback((data: Array<any>, width, height) => {
      // set graph size
      const margin = {top: 0, right: 20, bottom: 20, left: 30}

      // set svg element
      const svg = d3.select(d3Container.current)
        .attr("width", width)
        .attr("height", height - 10)

      // remove prevoius graph
      svg.selectAll("g").remove();

      // set scale (min max)
      const dateArray = data.map(el => el.date);
      const valArray = data.map(el => el.close);

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

      // append g element
      const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + 0 + ")")
      
      // append the line itself
      g.append("path")
        .attr("class", "y axis")
        .attr("d", valueline(hardcodedData));

      // now write x axis
      svg.append("g")
        .attr("class", styles.axis)
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(d3.axisBottom(x));

      // now write y axis
      svg.append("g")
        .attr("class", styles.axis)
        .attr("transform", "translate(" + margin.left + ",0)")
        .call(d3.axisLeft(y));
    }, [hardcodedData]);

    useEffect(() => {
      handleBuildGraph(hardcodedData, wrapperDiv.current ? wrapperDiv.current.offsetWidth : 0, wrapperDiv.current ? wrapperDiv.current.offsetHeight : 0);
    }, [hardcodedData, handleBuildGraph]);
    
    return (<div className={styles.svg} ref={wrapperDiv}>
        <svg className={styles.container} ref={d3Container}></svg>
    </div>)
}

export default Graph;