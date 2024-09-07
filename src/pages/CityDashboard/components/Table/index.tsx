import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { TableProps } from './interface';

const Table: React.FC<TableProps> = ({ data }) => {
  const tableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    if (tableRef.current) {
      const table = d3.select(tableRef.current);
      const headers = ['Name', 'Age', 'City'];

      // Clear any previous table content
      table.selectAll('*').remove();

      // Create table header
      table
        .append('thead')
        .append('tr')
        .selectAll('th')
        .data(headers)
        .enter()
        .append('th')
        .text((d) => d);

      // Create table body
      const tbody = table.append('tbody');

      tbody
        .selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .selectAll('td')
        .data((d) => [d.name, d.age, d.city])
        .enter()
        .append('td')
        .text((d) => d);
    }
  }, [data]);

  return (
    <table ref={tableRef} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody></tbody>
    </table>
  );
};

export default Table;
