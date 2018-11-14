import React from 'react';
import './index.scss';

const getTableHeader = columns => {
  return columns.map((item, i) => {
    return (
      <th
        key={i}
        width={item.width}
        className={item.className}
        style={{ width: item.width, textAlign: item.align }}
      >
        {item.title}
      </th>
    );
  });
};

const getTableRowCell = (columns, dataSource) => {
  return dataSource.map((dataItem, index) => {
    return (
      <tr key={index}>
        {columns.map((item, i) => {
          return (
            <td
              key={i}
              width={item.width}
              style={{ width: item.width, textAlign: item.align }}
            >
              {item.render(dataItem)}
            </td>
          );
        })}
      </tr>
    );
  });
};

const Table = ({ columns, dataSource, showHeader = true, style }) => {
  return (
    <div className="table-container" style={style}>
      <table className="bf-table">
        {showHeader && (
          <thead>
            <tr>{getTableHeader(columns)}</tr>
          </thead>
        )}
        <tbody>{getTableRowCell(columns, dataSource)}</tbody>
      </table>
    </div>
  );
};
export default Table;
