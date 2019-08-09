import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getResource } from '../../actions/resource';

import ResourceItem from '../resources/ResourceItem';

const Resource = ({ getResource, resource: { resource, loading }, match }) => {
  console.log(match.params.id);
  useEffect(() => {
    getResource(match.params.id);
  }, [getResource]);

  console.log('in resource: ', resource);

  return !loading && resource != null ? (
      <ResourceItem resource={resource} preview={false} />
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state) => ({
  resource: state.resource
});

export default connect(
  mapStateToProps,
  { getResource }
)(Resource);
