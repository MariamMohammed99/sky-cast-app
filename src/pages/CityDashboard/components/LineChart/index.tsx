import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface LineChartProps {
  data: { day: string; temp: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      svg.selectAll('*').remove(); // Clear previous content

      const g = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Define scales
      const xScale = d3
        .scalePoint<string>()
        .domain(data.map(d => d.day))
        .range([0, innerWidth])
        .padding(0.5);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.temp) || 0])
        .nice()
        .range([innerHeight, 0]);

      // Define line generator
      const line = d3
        .line<{ day: string; temp: number }>()
        .x(d => xScale(d.day) ?? 0) // Default to 0 if undefined
        .y(d => yScale(d.temp) ?? 0); // Default to 0 if undefined

      // Add the line path
      g.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2);

      // Add x-axis
      g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale));

      // Add y-axis
      g.append('g')
        .call(d3.axisLeft(yScale));
    }
  }, [data]);

  return (
    <svg ref={svgRef} width={600} height={400}></svg>
  );
};

export default LineChart;
