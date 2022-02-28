import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useCallback, useEffect, useRef } from 'react';
import { ChartSummaryGraphFormatObj } from '../../../Types/Store/ChartSummaryGraphFormat';

interface MyProps {
  data: Array<ChartSummaryGraphFormatObj>
}

function Graph(props: MyProps) {
    const d3Container = useRef<SVGSVGElement>(null);
    const wrapperDiv = useRef<HTMLDivElement>(null);
    
    const handleBuildGraph = useCallback((data: Array<ChartSummaryGraphFormatObj>, width) => {
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

      const	valueline = d3.area<any>()
        .x(function (d) {
            return x(d.date);
        })
        .y0(y(0))
        .y1(function (d) {
            return y(d.value);
        });

      // append g element
      const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + 0 + ")")
      
      // append the line itself
      g.append("path")
        .attr("class", "y axis")
        .attr("d", valueline(props.data));

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
    }, [props.data]);

    useEffect(() => {
      handleBuildGraph(props.data, 
                        wrapperDiv.current ? wrapperDiv.current.offsetWidth : 0);
    }, [props.data, handleBuildGraph]);
    
    return (<div className={styles.svg} ref={wrapperDiv}>
        <svg className={styles.container} ref={d3Container}></svg>
    </div>)
}

export default Graph;