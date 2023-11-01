import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const GraphComponent = ({ data }) => {
  const graphRef = useRef();

  useEffect(() => {
    if (data && data.length) {
      const svg = d3.select(graphRef.current);
      const margin = { top: 40, right: 40, bottom: 60, left: 60 };
      const width = 400 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const x = d3.scaleBand().range([0, width]).padding(0.1);
      const y = d3.scaleLinear().range([height, 0]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      x.domain(data.map((d) => d.title));
      y.domain([0, d3.max(data, (d) => d.amount)]);

      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis);

      svg.append('g').call(yAxis);

      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .style('fill', 'steelblue')
        .attr('x', (d) => x(d.title))
        .attr('width', x.bandwidth())
        .attr('y', (d) => y(d.amount))
        .attr('height', (d) => height - y(d.amount));

      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', 0 - margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .text('Sample Graph Title');

      svg
        .append('text')
        .attr('transform', `translate(${width / 2},${height + margin.top + 40})`)
        .style('text-anchor', 'middle')
        .text('Categories');

      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - height / 2)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Amount');

      const legend = svg.append('g').attr('class', 'legend').attr('transform', `translate(0,${height + 80})`);

      legend
        .append('rect')
        .attr('x', width - 100)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill', 'steelblue');

      legend
        .append('text')
        .attr('x', width - 85)
        .attr('y', 10)
        .text('Amount');
    }
  }, [data]);

  return <svg ref={graphRef} className="graph-container"></svg>;
};

export default GraphComponent;
