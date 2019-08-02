import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';

import GroupItem from './GroupItem';

const Group = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, []);

    return !profiles && loading ? (
        <div>
            Loading..
        </div>
    ) : (
            <GroupItem profiles={profiles}/>
        )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Group)
