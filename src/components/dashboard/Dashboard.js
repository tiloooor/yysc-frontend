import React, { useEffect } from 'react';

import { connect } from 'react-redux';

const Dashboard = ({ auth: { loading, user } }) => {

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>{user.admin ? <h3>I'm an admin</h3> : <h3>I'm NOT an admin</h3>}</div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
