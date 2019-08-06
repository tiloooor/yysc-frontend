import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../actions/resource';

const CreateTask = ({ addTask }) => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    startDate: '',
    endDate: ''
  });

  const { name, desc, startDate, endDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearForm = () => {
    setFormData({ name: '', desc: '', startDate: '', endDate: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addTask(formData);
    clearForm();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            aria-describedby="taskName"
          />
        </div>

        <div className="form-group">
          <label htmlFor="desc">Description </label>
          <textarea
            name="desc"
            cols="30"
            rows="5"
            placeholder="Add description..."
            value={desc}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={startDate}
            onChange={(e) => onChange(e)}
            aria-describedby="startDate"
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={endDate}
            onChange={(e) => onChange(e)}
            aria-describedby="endDate"
          />
        </div>

        <button type="submit" className="btn btn-general">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addTask }
)(CreateTask);
