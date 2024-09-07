import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { TableProps } from './interface';
import { StyledTable} from './styled';

const Table: React.FC<TableProps> = ({ data }) => {
  const tableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    if (tableRef.current) {
      const table = d3.select(tableRef.current);
      const headers = ['Day', 'Max Temp', 'Min Temp', 'Avg Temp'];
      table.selectAll('*').remove();

      table
        .append('thead')
        .append('tr')
        .selectAll('th')
        .data(headers)
        .enter()
        .append('th')
        .text((d) => d)
        .attr('class', 'header')
        .style('color', 'white');
       

      const tbody = table.append('tbody');

      tbody
        .selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .style('border-bottom', '1px solid #ccc')
        .selectAll('td')
        .data((d) => [d.date, d.maxTemp, d.minTemp, d.avgTemp])
        .enter()
        .append('td')
        .text((d) => d)
        .style('text-align', 'center')
        .style('padding', '5px')
        .style('height', '30px') 
        .style('color', 'white');
    
    }
  }, [data]);

  return <StyledTable ref={tableRef} style={{}}></StyledTable>;
};

export default Table;
