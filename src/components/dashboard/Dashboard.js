import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Dashboard = ({ auth: { user } }) => {
  const adminButtons = (
    <Link to="/resource/task">
      <button type="button">Create Task</button>
    </Link>
  );

  return user === null ? (
    <h1>Loading</h1>
  ) : (
    <div className="container">
      {user.admin ? <div>{ adminButtons }</div> : <h3>I'm NOT an admin</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
