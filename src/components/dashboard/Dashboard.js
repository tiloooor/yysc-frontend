import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getLikedResources } from '../../actions/resource';

import { connect } from 'react-redux';

import DailyTask from './DailyTask';
import Graph from '../graphs/Graph';
import RecentResources from './RecentResources';

const Dashboard = ({ auth: { user }, resources, getLikedResources }) => {
  useEffect(() => {
    if (user) {
      getLikedResources(user._id);
    }
  }, [getLikedResources, user]);

  const adminButtons = (
    <div>
      <Link to="/resource/task">
        <button type="button" className="btn btn-general">
          Create Task
        </button>
      </Link>
      <Link to="/upload">
        <button type="button" className="btn btn-general">
          Upload Resource
        </button>
      </Link>
    </div>
  );

  return user != null && resources ? (
    <div className="container">
      {user.admin ? (
        <div>{adminButtons}</div>
      ) : (
        <div>
          <DailyTask />
          <Graph />
          <RecentResources resources={resources} />
        </div>
      )}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  resources: state.resource.resources
});

export default connect(
  mapStateToProps,
  { getLikedResources }
)(Dashboard);
