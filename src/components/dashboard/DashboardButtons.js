import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const DashboardButtons = ({ id }) => {
  return (
    <div id="dashboard-buttons" className="row">
      <div className="col-md-4">
        <Link to={`/profile/${id}`}>
          <Card className="dashboard-card">
            <CardContent>Profile</CardContent>
          </Card>
        </Link>
      </div>

      <div className="col-md-4">
        <Link to={`/message`}>
          <Card className="dashboard-card">
            <CardContent>Message</CardContent>
          </Card>
        </Link>
      </div>

      <div className="col-md-4">
        <Link to={`/resources`}>
          <Card className="dashboard-card">
            <CardContent>Resources</CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default DashboardButtons;
