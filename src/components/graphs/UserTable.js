import React from 'react';

import { Link } from 'react-router-dom';

const UserTable = ({ users }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">_id</th>
            <th scope="col">User</th>
            <th scope="col">Logs</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/log/${user._id}`}>
                  <button>User Logs</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
