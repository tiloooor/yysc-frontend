import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import DailyTask from './DailyTask';

const Dashboard = ({ auth: { user } }) => {
  const adminButtons = (
    <div>
      <Link to="/resource/task">
        <button type="button" className="btn btn-general">Create Task</button>
      </Link>
      <Link to="/upload">
        <button type="button" className="btn btn-general">Upload Resource</button>
      </Link>
    </div>
  );

  return user === null ? (
    <h1>Loading</h1>
  ) : (
    <div className="container">
      {user.admin ? (
        <div>{adminButtons}</div>
      ) : (
        <div>
          <DailyTask />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
