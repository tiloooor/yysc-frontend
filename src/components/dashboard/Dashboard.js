import React, { useEffect } from 'react';

import DailyTask from './DailyTask';
import DailyTaskButtons from './DailyTaskButtons';

import { connect } from 'react-redux';

const Dashboard = ({
    auth: { user },
}) => {
    const data = {
        tasks: ['Reading Meditation Food', 'Restorative Yoga class']
    };

    return (
        <div className="container">
            <DailyTask data={data} />
            <DailyTaskButtons />
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(Dashboard);
