import styles from './Graph.module.scss';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function Graph() {
    const d3Container = useRef(null);
    
    function buildGraph(data: Array<number>): void {
        const width = 200,
        scaleFactor = 10,
        barHeight = 20;
    
        const graph = d3.select(d3Container.current)
          .attr("width", width)
          .attr("height", barHeight * data.length);
    
        const bar = graph.selectAll("g")
          .data(data)
          .enter()
          .append("g")
          .attr("transform", function(d, i) {
                return "translate(0," + i * barHeight + ")";
          });
    
        bar.append("rect")
          .attr("width", function(d) {
                    return d * scaleFactor;
          })
          .attr("height", barHeight - 1);
           
        bar.append("text")
          .attr("x", function(d) { return (d*scaleFactor); })
          .attr("y", barHeight / 2)
          .attr("dy", ".35em")
          .text(function(d) { return d; });

        
        
    }

    useEffect(() => {
        buildGraph([5, 10, 12]);
    });
    
    return (<div className={styles.svg}>
        <svg className="container" ref={d3Container} width="100" height="100"></svg>
    </div>)
}

export default Graph;