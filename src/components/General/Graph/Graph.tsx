import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useCallback, useEffect, useRef } from 'react';
import { ChartSummaryGraphFormatObj } from '../../../Types/Store/ChartSummaryGraphFormat';
import { bisect } from 'd3';

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
            return y(d.value)
        
        });

      // append g element
      const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + 0 + ")")
        .on('mouseover', (arg: MouseEvent) => mouseOverHandle(arg))
        .on('mousemove', (arg: MouseEvent) => mouseMoveHandle(arg, data))
        .on('mouseout', (arg: MouseEvent) => mouseOutHandle(arg));

      const mouseOverHandle = (args: MouseEvent) => {
        focus.style("opacity", 1);
        focusText.style("opacity", 1);
      }

      const mouseMoveHandle = (args: MouseEvent, data: Array<ChartSummaryGraphFormatObj>) => {
        const x0 = x.invert(args.offsetX - margin.left);
        const i = bisect(data.map(el => el.date), x0);
        focus
          .attr("cx", args.offsetX)
          .attr("cy", y(data[i].value))
        focusText
          .html("x:" + data[i].date.toLocaleDateString() + "  -  " + "y:" + data[i].value.toFixed(2))
          .attr("x", args.offsetX + 15)
          .attr("y", y(data[i].value))
      }

      const mouseOutHandle = (args: MouseEvent) => {
        focus.style("opacity", 0);
        focusText.style("opacity", 0);
      }

      // Create the text that travels along the curve of chart
      const focusText = svg
      .append('g')
      .append('text')
        .style("opacity", 0)
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")

      // Create the circle that travels along the curve of chart
      const focus = svg
      .append('g')
      .append('circle')
        .style("fill", "none")
        .attr("stroke", "black")
        .attr('r', 8.5)
        .style("opacity", 0)
      
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