import React from 'react';
import Moment from 'react-moment';

const DailyTask = ({ data }) => {
  const renderDate = () => {
    return <Moment format="MMMM D" date={new Date()} />;
  };

  const renderTasks = () => {
    const tasks = data.tasks.map((task) => <li>{task}</li>);
    return tasks;
  };

  return (
    <div className="daily-task-container">
      <h3>Daily Tasks</h3>
      {renderDate()}

      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default DailyTask;
