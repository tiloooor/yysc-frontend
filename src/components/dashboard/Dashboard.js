import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import DailyTask from './DailyTask';
import DashboardButtons from './DashboardButtons';
import Graph from '../graphs/Graph';
import RecentResources from './RecentResources';
import UserTable from '../graphs/UserTable';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getLikedResources } from '../../actions/resource';
import { getAllUsers } from '../../actions/user';

const Dashboard = ({ auth: { user }, user: { users }, resources, getLikedResources, getAllUsers }) => {
  useEffect(() => {
    if (user) {
      getLikedResources(user._id);
    }
  }, [getLikedResources, user]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const adminButtons = (
    <div className="row">
      <div className="col-md-4">
        <Link to="/resource/task">
          <Card>
            <CardContent>Create Task</CardContent>
          </Card>
        </Link>
      </div>

      <div className="col-md-4">
        <Link to="/upload">
          <Card>
            <CardContent>Upload Resource</CardContent>
          </Card>
        </Link>
      </div>

      <div className="col-md-4">
        <Link to="/message">
          <Card>
            <CardContent>Messages</CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );

  return user != null && resources && users ? (
    <div className="container">
      {user.admin ? (
        <div>
          {adminButtons}
          <UserTable users={users}  />
        </div>
      ) : (
        <div>
          <DailyTask />
          <DashboardButtons id={user._id} />
          <Card id="graph-card">
            <CardContent>
              <Graph />
            </CardContent>
          </Card>
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
  resources: state.resource.resources,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getLikedResources, getAllUsers }
)(Dashboard);
