import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';

import ViewedResources from './ViewedResources';
import UserPosts from './UserPosts';

const Profile = ({
  auth,
  match,
  getProfileById,
  profile: { profileData, loading }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profileData === null || loading ? (
        <h1>Loading...</h1>
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
              <h5>{profileData.name}</h5>
              <p>User since: {profileData.date}</p>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profileData._id && (
                  <Link to="/edit-profile" className="btn btn-general">
                    Edit Profile
                  </Link>
                )}
            </div>
          </div>

          <div className="container">
            <ViewedResources />
            <UserPosts userId={match.params.id}/>
          </div>
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
  { getProfileById }
)(Profile);
