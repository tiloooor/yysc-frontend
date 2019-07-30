import React from 'react'

import DailyTask from './DailyTask';
import DailyTaskButtons from './DailyTaskButtons'

const Dashboard = () => {
    const data = {
        "tasks": ["Reading Meditation Food", "Restorative Yoga class"]
    }

    return (
        <div>
            <DailyTask data={data} /> 
            <DailyTaskButtons />
        </div>
    )
}

export default Dashboard
