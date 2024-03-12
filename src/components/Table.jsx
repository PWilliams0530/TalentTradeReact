import React from 'react';

const data = [
  // ... your data
];

const Table = () => {
  return (
    <table className="table table-striped table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;