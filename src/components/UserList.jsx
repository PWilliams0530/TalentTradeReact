import React, { useState, useEffect } from 'react';
import usefetchData from './dataFetcher'; // Import the custom hook
import { Link } from 'react-router-dom'; // Import Link for navigation

const UserList = () => {
  const url = 'https://randomuser.me/api?results=6'; // Your API endpoint
  const { data, isLoading, error } = usefetchData(url);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-3">
      <h2>Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.results && data.results.map((user) => (
            <tr key={user.login.uuid}>
              <td>{user.login.uuid}</td>
              <td> {user.name.title} {user.name.first} {user.name.last}</td>
              <td>
                <Link to={`/users/${user.login.uuid}/edit`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;