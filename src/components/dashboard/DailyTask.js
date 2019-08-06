import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { getTasks } from '../../actions/resource';

const DailyTask = ({ getTasks, tasks }) => {
  useEffect(() => {
    getTasks()
  }, []);

  const renderTodayDate = () => {
    return <Moment format="MMMM D" date={new Date()} />;
  };


  return (
    <div className="daily-task-container">
      <h3>Daily Tasks</h3>
      {renderTodayDate()}

      <ul>
        { tasks.map((task) => (
          <li>
            {task.name}
            <p>{task.desc}</p>
          </li>
        )) }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.resource.tasks
})

export default connect(mapStateToProps, { getTasks })(DailyTask);
