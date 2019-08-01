import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import GroupItem from './GroupItem';
import { getProfiles } from '../../actions/profile'

const Group = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, []);

    return !profiles && loading ? (
        <div>
            Loading..
        </div>
    ) : (
        <div className="social-wall-group">
            { profiles.map(profile => (
                <GroupItem profile={profile} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Group)
