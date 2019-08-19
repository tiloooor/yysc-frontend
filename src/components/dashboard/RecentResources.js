import React from 'react';
import ResourceItem from '../resources/ResourceItem';

import { Link } from 'react-router-dom';

const RecentResources = ({ resources }) => {
  return (
    <div className="container recent-viewed-container">
      <h5>Recently Viewed Resources</h5>
      <p>
        <Link to="/resources">See all Resources</Link>
      </p>

      <div className="row">
        {resources.map((resource) => (
          <ResourceItem resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default RecentResources;
