import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BubbleChartComponent = ({ data }) => {
  const graphRef = useRef();

  useEffect(() => {
    if (data && data.length) {
      const svg = d3.select(graphRef.current);
      const margin = { top: 40, right: 40, bottom: 60, left: 60 };
      const width = 400 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const simulation = d3
        .forceSimulation(data)
        .force('charge', d3.forceManyBody().strength(5))
        .force('x', d3.forceX(width / 2))
        .force('y', d3.forceY(height / 2))
        .force('collision', d3.forceCollide().radius((d) => d.amount + 5)); // Adjust the radius

      svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('margin', '0 auto'); // Center the graph on the page;

      const bubbles = svg
        .selectAll('.bubble')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'bubble');

      bubbles
        .append('circle')
        .attr('r', (d) => d.amount)
        .style('fill', 'steelblue')
        .attr('cx', width / 2)
        .attr('cy', height / 2);

      bubbles
        .append('text')
        .attr('text-anchor', 'middle')
        .text((d) => d.title)
        .style('fill', 'black');
      
      simulation.on('tick', () => {
        bubbles.attr('transform', (d) => `translate(${d.x},${d.y})`);
      });
    }
  }, [data]);

  return <svg ref={graphRef} className="graph-container"></svg>;
};

export default BubbleChartComponent;
