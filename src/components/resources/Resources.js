import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getResources } from '../../actions/resource';

import ResourceItem from './ResourceItem';
import { link } from 'fs';

const Resources = ({ resources, getResources }) => {
  useEffect(() => {
    getResources();
  }, [getResources]);

  return (
    <div className="container">
      <div className="row">
        {resources.map((resource) => (
          <ResourceItem key={resource._id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  resources: state.resource.resources
});

export default connect(
  mapStateToProps,
  { getResources }
)(Resources);
