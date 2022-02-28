import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useCallback, useEffect, useMemo, useRef } from 'react';

function Graph() {
    const d3Container = useRef<SVGSVGElement>(null);
    const wrapperDiv = useRef<HTMLDivElement>(null);

    const hardcodedData = useMemo(() =>
      [
        {
          date: new Date("1-May-12"),
          value: 58.13
        },
        {
          date: new Date("30-Apr-12"),
          value: 53.98
        },
        {
          date: new Date("27-Apr-12"),
          value: 67
        },
        {
          date: new Date("26-Apr-12"),
          value: 89.7
        },
        {
          date: new Date("25-Apr-12"),
          value: 99
        },
        {
          date: new Date("24-Apr-12"),
          value: 130.28
        },
        {
          date: new Date("23-Apr-12"),
          value: 166.7
        },
        {
          date: new Date("20-Apr-12"),
          value: 234.98
        },
        {
          date: new Date("19-Apr-12"),
          value: 345.44
        },
        {
          date: new Date("18-Apr-12"),
          value: 443.34
        },
        {
          date: new Date("17-Apr-12"),
          value: 543.7
        },
        {
          date: new Date("16-Apr-12"),
          value: 580.13
        },
        {
          date: new Date("13-Apr-12"),
          value: 605.23
        },
        {
          date: new Date("12-Apr-12"),
          value: 622.77
        },
        {
          date: new Date("11-Apr-12"),
          value: 626.2
        },
        {
          date: new Date("10-Apr-12"),
          value: 628.44
        },
        {
          date: new Date("9-Apr-12"),
          value: 636.23
        },
        {
          date: new Date("5-Apr-12"),
          value: 633.68
        },
        {
          date: new Date("4-Apr-12"),
          value: 624.31
        },
        {
          date: new Date("3-Apr-12"),
          value: 629.32
        },
        {
          date: new Date("2-Apr-12"),
          value: 618.63
        },
        {
          date: new Date("30-Mar-12"),
          value: 599.55
        },
        {
          date: new Date("29-Mar-12"),
          value: 609.86
        },
        {
          date: new Date("28-Mar-12"),
          value: 617.62
        },
        {
          date: new Date("27-Mar-12"),
          value: 614.48
        },
        {
          date: new Date("26-Mar-12"),
          value: 606.98
        }
    ], []);
    
    const handleBuildGraph = useCallback((data: Array<any>, width) => {
      // set graph size
      const margin = {top: 0, right: 0, bottom: 20, left: 30}
      const height = width * 0.2 > 350 ? width * 0.2 : 350;

      // set svg element - total width and height
      const svg = d3.select(d3Container.current)
        .attr("width", width)
        .attr("height", height)

      // remove prevoius graph
      svg.selectAll("g").remove();

      // set scale (min max)
      const dateArray = data.map(el => el.date);
      const valArray = data.map(el => el.value);

      // set graph size net
      const x = d3.scaleTime()
        .domain([dateArray[dateArray.length - 1], dateArray[0]])
        .range([0, width - margin.left]);
      const y = d3.scaleLinear()
        .domain([0, Math.max(...valArray)])
        .range([ height - margin.bottom, 0 ]);

      const	valueline = d3.line<any>()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.value);
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
      handleBuildGraph(hardcodedData, 
                        wrapperDiv.current ? wrapperDiv.current.offsetWidth : 0);
    }, [hardcodedData, handleBuildGraph]);
    
    return (<div className={styles.svg} ref={wrapperDiv}>
        <svg className={styles.container} ref={d3Container}></svg>
    </div>)
}

export default Graph;