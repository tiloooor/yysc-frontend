import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import ViewedResources from './ViewedResources';

const Profile = ({
  auth,
  getCurrentProfile,
  profile: { profileData, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      {profileData === null || loading ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <div className="jumbotron jumbotron-fluid">
            <div className="container profile-container">
              <img
                className="rounded-circle"
                src={profileData.avatar}
                style={{ height: '150px', width: '150px' }}
                alt=""
              />
              <p>User since: {profileData.date}</p>
            </div>
          </div>

          <ViewedResources />
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Profile);
