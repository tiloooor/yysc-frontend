import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getLogById } from '../../actions/tracking';

const UserLogs = ({ getLogById, match, user: { logs } }) => {
  useEffect(() => {
    getLogById(match.params.id);
  }, [getLogById, match.params.id]);

  console.log(logs);

  return (
    logs && (
      <div className="container">
        {logs.map((log) => (
          <p>{log.action}: {log.payload}</p>
        ))}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getLogById }
)(UserLogs);
